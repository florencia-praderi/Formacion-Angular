import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  constructor() { }

  colors: string[] = ['rojo', 'amarillo', 'verde'];
  iterations: number = 0;
  $turnLightColors = new Subject<string>();
  timer: any
  
  turnOnOff(on: boolean){
    if(on){
      this.timer = setInterval(()=>{
        this.$turnLightColors.next(this.colors[this.iterations])
        this.iterations++
        if(this.iterations==3){
          this.iterations = 0;
          clearInterval(this.timer)
        }
      }, 2000)
    }
    else{
      clearInterval(this.timer)
    }
  }

  turnOn(){
    if(this.iterations ==2){
      clearInterval(this.timer)
    }
    console.log(this.iterations)
  }

}
