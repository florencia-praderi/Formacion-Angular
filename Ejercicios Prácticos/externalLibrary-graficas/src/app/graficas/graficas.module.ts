import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { BarraComponent } from './barra/barra.component';
import { LineaComponent } from './linea/linea.component';



@NgModule({
  declarations: [
    BarraComponent,
    LineaComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    BarraComponent,
    LineaComponent
  ]
})
export class GraficasModule { }
