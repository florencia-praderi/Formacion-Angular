import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {

  nombreLower: string = 'florencia';
  nombreUpper: string = 'FLORENCIA';
  nombreCompleto: string = 'floRenCia'

  fecha: Date = new Date(); //hoy
}
