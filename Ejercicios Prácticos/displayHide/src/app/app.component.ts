import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'displayHide';

  display: boolean = false;


  toggle(){
    this.display = !this.display;
    console.log('hello world')
  }
}
