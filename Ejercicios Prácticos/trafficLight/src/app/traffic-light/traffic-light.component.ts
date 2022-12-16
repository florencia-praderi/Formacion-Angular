import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styles: [`
  .semaforo{
    background-color: black;
  }
  .luz{
    background-color: grey;
    border-radius: 50%;
    margin: 15px;
    padding: 30px;
    justify-content: center;
  }
  .luz-roja{
    background-color: red;
  }
  .luz-amarilla{
    background-color: yellow;
  }
  .luz-verde{
    background-color: green;
  }
  `]
})
export class TrafficLightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
