import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html'
})
export class MuestraNombreComponent implements OnInit {

  @Input() nombre!: string

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }

}
