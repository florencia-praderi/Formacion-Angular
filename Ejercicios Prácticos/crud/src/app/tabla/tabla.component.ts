import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { switchMap } from 'rxjs';
import { User } from '../interfaces/users.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [`
  button{
    cursor: pointer
  }`]
})
export class TablaComponent implements OnInit {

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Input() data: User[] = [];
  users!: User;
  filterID!: any;
  tableColumns: string[] = [
    'Nombre',
    'Email',
    'Suscrito',
    'País',
    'Ciudad',
    'Actions'
  ]

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getUsers()
      .subscribe(users=>{
        this.data = users;
        console.log(users)}
      );
  }

  delete(id: number){
    this.crudService.deleteUser(id)
      .subscribe(()=>
      this.crudService.setUsers()
        .subscribe({
          next: users=> this.data = users
        })
      )
  }

  editUser(id: number){
    this.edit.emit(id)
    console.log('editar', id)
  }

}
