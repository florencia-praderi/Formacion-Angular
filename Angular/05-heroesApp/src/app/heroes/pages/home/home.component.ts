import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`.container{
            margin: 10px;}
          `]
})
export class HomeComponent {

  get auth(){
    return this.authService.auth;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    //Ir al Backend
    //Confirmar que el usuario exista (el usuario se almacena en un servicio)

    this.router.navigate(['./auth'])
  }

}
