import { Component, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18Select
  nombre: string = 'Florencia';
  genero: string = 'femenino';


  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18Plural
  clientes: string[] = ['Maria', 'Paula', 'Matias', 'Olivia', 'Fernando']
  clientesMap = {
    '=0': 'no hay clientes esperando.',
    '=1': 'hay un cliente esperando.',
    'other': 'hay # clientes esperando.'
  }

  cambiarNombre(){
    console.log('nombre cambiado')
    this.nombre = 'Matias'
    this.genero = 'masculino'
  }

  borrarCliente(){
    console.log('cliente borrado')
    this.clientes.pop();
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Florencia',
    edad: 30,
    direccion: 'Barcelona, España.'
  }

  //Json Pipe
  heroes = [{
    nombre: 'Superman',
    vuela: true
  },{
    nombre: 'Robin',
    vuela: false
  },{
    nombre: 'Aquaman',
    vuela: false
  }]

  //Async Pipe
  miObservable = interval(2000); //0,1,2,3,4,5...
  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa!!')
    }, 3500);
  })
}
