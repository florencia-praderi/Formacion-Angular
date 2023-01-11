import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = 'http://localhost:3000';

  private _users = new Subject<User[]>();
  users$ = this._users.asObservable();

  constructor(private http: HttpClient) { }

    getCountries(): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}/countries`)
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
  }
  //crear
  postUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`, user)
  }

  //editar
  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user)
  }

  setUsers(){
    this.getUsers()
      .subscribe({
        next: (users)=> this._users.next(users)
      })
      return this.users$
  }

  deleteUser(id: number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`)
  }
  
}
