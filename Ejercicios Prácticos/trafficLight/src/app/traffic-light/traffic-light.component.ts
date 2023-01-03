import { Component } from '@angular/core';
import { TrafficService } from '../traffic.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styles: [`
  .semaforo{
    background-color: black;
    width: fit-content;
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
export class TrafficLightComponent  {

  iterations: number = 0;
  activeColor!: string;

  constructor(private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.trafficService.$turnLightColors.subscribe({
      next: (color)=> this.activeColor = color
    })
  }

  switchLight($event: any){
    this.trafficService.turnOnOff($event)
  }
  
}
