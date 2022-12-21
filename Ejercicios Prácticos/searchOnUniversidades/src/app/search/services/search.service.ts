import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Universidad, CodigoPais } from '../interfaces/universidades.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUniversidades(): 
    Observable<Universidad[]>{
      return this.http.get<Universidad[]>(`${this.baseUrl}/universidades`)
  }

  // getUniversidadesPorPais(codigoPais: string):
  //   Observable<Universidad[]>{
  //     return this.http.get<Universidad[]>
  //       (`${this.baseUrl}/universidades?codigo_pais=${codigoPais}`)
  // }
  
  getSugerenciasPorPais(termino: string, paisSeleccionado: string): Observable<Universidad[]>{
    return this.http.get<Universidad[]>(`${this.baseUrl}/universidades/?q=${termino}&pais=${paisSeleccionado}`)
  }
}
