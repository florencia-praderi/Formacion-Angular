import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query: string){
//Para que sea lo mismo buscar en minuscula que en mayus
query = query.trim().toLocaleLowerCase();
//Si la busqueda no existe, insertarla (evita duplicarla)
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
//Limitar las busquedas mostradas a 10
    this._historial = this._historial.splice(0,10)      
    }



    console.log(this._historial)
  }

}
