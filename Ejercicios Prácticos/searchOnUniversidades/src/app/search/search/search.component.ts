import { Component, OnInit } from '@angular/core';
import { Universidad } from '../interfaces/universidades.interface';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino: string = '';
  universidades: Universidad[] = [];


  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getUniversidades()
    .subscribe(universidades=> {
      this.universidades = universidades})
  }


}
