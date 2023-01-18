import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getDataDona(){
    return this.http.get('http://localhost:3000/grafica')
  }

  //Mediante rxjs
  //uso el pipe map que me permite recibir la data de un observable y
  //retornarlo en el formato que yo quiera

  getDataFormatoDona(){
    return this.getDataDona()
      .pipe(
        delay(1500),
        map( data=> {
          const labels = Object.keys(data)
          const values = Object.values(data)
          return {
            labels, 
            datasets: [
              {data: values,
                backgroundColor: ['#2EFFA1', '#29E0B2', '#00F5E9', '#0BC0DE', '#28A6ED']}
            ]}
        })
      )
  }

}
