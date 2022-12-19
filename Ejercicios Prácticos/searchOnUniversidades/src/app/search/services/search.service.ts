import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Universidad } from '../interfaces/universidades.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUniversidades(): Observable<Universidad[]>{
    return this.http.get<Universidad[]>(`${this.baseUrl}/universidades`)
  }
}
