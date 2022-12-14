import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //     'nombre'      : new FormControl ('RTX 4080ti'),
  //     'precio'      : new FormControl (1500),
  //     'existencias' : new FormControl (5)
  // })

  //FormBuilder: inyecto el servicio y lo inicio con sus propiedades
  miFormulario: FormGroup = this.fb.group({
      nombre      : [, [Validators.required, Validators.minLength(2)]],
      precio      : [, [Validators.required, Validators.min(0)]],
      existencias : [, [Validators.required, Validators.min(0)]]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTZ 4080ti',
      precio: 1600
    })
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }
}
