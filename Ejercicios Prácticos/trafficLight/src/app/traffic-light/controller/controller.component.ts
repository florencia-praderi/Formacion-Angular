import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrafficService } from '../../traffic.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html'
})
export class ControllerComponent implements OnInit {

  activeColor: string | null = '';
  @Output() turnOnLight: EventEmitter<any> = new EventEmitter();
  switcherValue: boolean = false;

  constructor(private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.trafficService.$lightColor.subscribe({
      next: (color)=>{
        this.activeColor = color;
      }
    });
    this.trafficService.$switcherValue.subscribe({
      next: (value)=>{
        this.switcherValue = value;
      }
    })
  }

  onOff(){
    this.switcherValue = !this.switcherValue;
    this.turnOnLight.emit(this.switcherValue); 
  }

}
