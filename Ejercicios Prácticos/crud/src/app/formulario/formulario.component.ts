import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../interfaces/users.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {

  data: User[] = [];
  countries: string[] = [];
  validPassword: string | boolean = false;
  miFormulario: any;
  user: User = {
    username: '',
    email: '',
    suscript: false,
    country: '',
    city: ''
  }


  constructor(private crudService: CrudService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      username: [, [Validators.required, Validators.minLength(3)]],
      password: [, [Validators.required, Validators.minLength(4)]],
      confirmPassword: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      suscript: [false],
      country: [, [Validators.required]],
      city: [, [Validators.required, Validators.minLength(4)]]
    });
    this.crudService.setUsers()
      .subscribe({
        next: (resp)=> this.data = resp
      })


    this.crudService.getCountries()
    .subscribe(countries=> this.countries = countries)
  }

  create(){
    //Validators
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    if(this.miFormulario.get('password')?.value !== this.miFormulario.get('confirmPassword')?.value){
      this.validPassword = 'Las contraseñas no coinciden'
      return;
    }

    //Evaluar si tiene id o no, para enviar post o put
    if(!this.user.id){
      //Crear (petición post)
      const newUser = {
        ...this.miFormulario.value,
        id: this.user.id
      }
    this.crudService
      .postUser(newUser)
      .subscribe({
        next: ()=> this.crudService.setUsers()
      })
      } else{
        //Editar (petición put)

    this.crudService
      .putUser(this.miFormulario.value)
      .subscribe({
        next: ()=> this.crudService.setUsers()
      })
    }
    this.miFormulario.reset()
    }

    changeUser(id: number){
      this.crudService.getUserById(id)
        .subscribe(({password, ...user})=> {
          this.miFormulario.reset({...user, password: password, confirmPassword: password});
          this.user = {...user, password}
        })
    }

    validarCampo(campo: string){
      return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
    }
  }
