import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaModule } from '../tabla/tabla.module';


@NgModule({
    declarations: [
        FormularioComponent
    ],
    exports: [
        FormularioComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TablaModule
    ]
})
export class FormularioModule { }
