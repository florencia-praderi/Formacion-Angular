import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v2';
  
//creo la propiedad privada para que no se realicen cambios por error en el arr
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

//creo una copia publica de la prop privada para obtener paises
  get regiones(): string[] {
    return [...this._regiones]
  }

  constructor( private http: HttpClient ) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]>{
    const url: string = `${this.apiUrl}/region/${region}?fields=name,alpha3Code`;
    return this.http.get<PaisSmall[]>(url)
  }

  getPaisPorCodigo(codigo: string): Observable<Pais | null> {
  //puede ser que recibamos un string vacio, le decimos que devuelva null
  //si no encontro ningun pais con ese codigo
  //uso el metodo de rx of, para devolver un nuevo observable
    if(!codigo){
      return of(null);
    }
    const url: string = `${this.apiUrl}/alpha/${codigo}`
    return this.http.get<Pais>(url)
  }

  getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall>{
    const url: string = `${this.apiUrl}/alpha/${codigo}?fields=name,alpha3Code`
    return this.http.get<PaisSmall>(url)
  }

  getPaisesPorCodigos(borders: string[]): Observable<PaisSmall[]>{
    if(!borders){
      return of([])
    }
    const peticiones: Observable<PaisSmall>[] = [];
    borders.forEach(codigo=>{
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion)
    })

    return combineLatest(peticiones)
    //es una funcion de rxjs que devuelve un observable que contiene un arreglo
    //con cada una de las peticiones internas
  }
}
