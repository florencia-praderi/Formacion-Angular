import { Component, OnInit } from '@angular/core';
import { Universidad, CodigoPais } from '../interfaces/universidades.interface';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino: string = '';
  paisSeleccionado = 'España';
  codigoPais = 'ES';
  universidades: Universidad[] = [];
  paises = [
    {nombre: 'España', codigo_pais: 'ES'},
    {nombre: 'Reino Unido', codigo_pais: 'GB'},
    {nombre: 'Portugal', codigo_pais: 'PT'}
  ];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {}

  seleccionarPais(pais: any){
    this.termino = '';
    this.paisSeleccionado = pais.nombre;
    this.codigoPais = pais.codigo_pais;
    console.log(this.codigoPais)
  }

  buscar(){
    this.searchService.getSugerenciasPorPais(this.termino, this.paisSeleccionado)
      .subscribe(
      (universidades)=> {this.universidades = universidades}
        )
    }

    // buscarPorPais(){
    //   this.searchService.getUniversidadesPorPais(this.codigoPais)
    //   .subscribe(
    //     (universidades)=>{
    //       this.universidades = universidades
    //       console.log(universidades)
    //     }
    //   )
    // }  
  }


