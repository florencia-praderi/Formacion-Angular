import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { HeroesModule } from '../../heroes.module';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
        .subscribe(heroes => {this.heroes = heroes})
  }

}
