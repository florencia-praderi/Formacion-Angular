import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  apiUrl: string = 'https://api.covidtracking.com/v1/states';

  constructor(private http: HttpClient) { }

  getContagiosPorEstado(){
    return this.http.get(`${this.apiUrl}/current.json`)
  }

  getContagiosPorEstadoFiltrado(){
    return this.getContagiosPorEstado()
    // .pipe(
    //   switchMap((data: any)=>{
    //     return [ 
    //       data
    //       .map(({state, positiveTestsViral}: any)=>({
    //         state,
    //         positiveTestsViral
    //       }))
    //       .filter((obj: any)=> !!obj.positiveTestsViral)
    //     ]
    //   })
    // )


    .pipe(
      map( ({state, positiveTestsViral}:any)=>{
        const labels = Object.values(state)
        const values = Object.values(positiveTestsViral)
        console.log(labels)
        return {
          labels,
          datasets: [
            {data: values,
            backgroundColor: ['#EB83D5']}
          ]
        }
      })
    )
  }

}
