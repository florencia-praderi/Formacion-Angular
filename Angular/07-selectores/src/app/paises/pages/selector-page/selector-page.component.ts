import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Pais, PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region   : ['', Validators.required],
    pais     : ['', Validators.required],
    frontera : ['', Validators.required]
  });

  //Llenar selectores
  regiones: string[]  = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando: boolean = false;
  

  constructor(private fb: FormBuilder,
              private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //CUANDO CAMBIE LA REGION, tambien tiene que cambiar el pais.
    //uso el tap para resetear el valor de pais en caso de que seleccion
    //una region y despues la cambie, debe cambiar la selec del pais
    //uso el switch map que recibe los valores de un observable, y
    //los envia por params a una nueva funcion que devuelve un nuevo observable
  
    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap((region)=>{
        this.miFormulario.get('pais')?.reset('')
        this.cargando = true;
      }),
      switchMap(region=>
        this.paisesService.getPaisesPorRegion(region)))
    .subscribe(paises=> {
      this.paises = paises
      this.cargando = false;
    })

  //CUANDO CAMBIE EL PAIS, cambia la frontera 
  this.miFormulario.get('pais')?.valueChanges
  .pipe(
    tap(()=> {
      this.miFormulario.get('frontera')?.reset('');
      this.cargando = true;
    }),
    switchMap(codigo=> 
      this.paisesService.getPaisPorCodigo(codigo)),
    switchMap(pais=>
      this.paisesService.getPaisesPorCodigos(pais?.borders!))
    )
  .subscribe(paises=>{
    // this.fronteras = pais?.borders || [];
    //nuestro serv puede regresar null (no recibir ningun pais), 
    //le decimos que debe retornar un arr vacio
    this.fronteras = paises;
  console.log(paises)
    this.cargando = false;
  })
  }

  submit(){
    console.log(this.miFormulario.value)
  }

}
