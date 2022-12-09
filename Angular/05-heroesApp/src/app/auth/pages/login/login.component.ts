import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router,
              private authService: AuthService) { }

  login(){
    //Ir al Backend
    //Confirmar que el usuario exista (el usuario se almacena en un servicio)

    this.authService.login()
      .subscribe(resp=>{
        console.log(resp)
        if(resp.id){
          this.router.navigate(['./heroes'])
        }})
  }
}
