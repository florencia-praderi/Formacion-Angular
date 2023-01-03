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
  .rojo{
    background-color: red;
  }
  .amarillo{
    background-color: yellow;
  }
  .verde{
    background-color: green;
  }
  `]
})
export class TrafficLightComponent  {

  iterations: number = 0;
  activeColor: string | null = '';

  constructor(private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.trafficService.$lightColor.subscribe({
      next: (color)=> this.activeColor = color
    })
  }

  controllerSwitch(value: any){
    this.trafficService.turnOnOff(value)
  }
  
}
