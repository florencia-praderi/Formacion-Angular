import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrafficService } from '../traffic.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html'
})
export class ControllerComponent implements OnInit {

  activeColor!: string;
  @Output() turnOnLight = new EventEmitter<boolean>();
  switchBoolean: boolean = false;

  constructor(private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.trafficService.$turnLightColors.subscribe({
      next: (color)=>{
        this.activeColor = color;
      }
    })
  }

  switchLight(){
    this.switchBoolean = !this.switchBoolean;
    this.turnOnLight.emit(this.switchBoolean) 
  }


}
