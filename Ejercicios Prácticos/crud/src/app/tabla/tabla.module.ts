import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MaterialModule,
    FormsModule,
  ],
  exports: [
    TablaComponent
  ]
})
export class TablaModule { }
