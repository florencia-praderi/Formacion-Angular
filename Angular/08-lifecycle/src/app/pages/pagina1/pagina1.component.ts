import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html'
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck,
      AfterContentInit, AfterContentChecked, AfterViewInit, 
      AfterViewChecked, OnDestroy {

    nombre: string = 'Florencia';
    segundos: number = 0;
    timerSubscription!: Subscription;

  constructor() {
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000)
      .subscribe(i => this.segundos = i)
      //si yo no cancelo la suscrip, se va a ejecutar infinitas veces
      //para cancelarlo, lo hago en el ngdestroy
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpio')
  }

  guardar(termino: string){
    console.log(termino)
  }
}
