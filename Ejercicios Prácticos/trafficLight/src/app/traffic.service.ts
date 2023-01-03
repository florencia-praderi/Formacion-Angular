import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  constructor() { }

  colors: string[] = ['rojo', 'amarillo', 'verde', ''];
  iterations: number = 0;
  timer: any  
  $lightColor = new Subject<string | null>();
  $switcherValue = new Subject<boolean>();

  
  turnOnOff(on: boolean){
    if(!!on){
      this.timer = setInterval(()=>{
        this.$lightColor.next(this.colors[this.iterations])
        this.iterations++
        if(this.iterations===4){
          this.iterations = 0;
          this.$switcherValue.next(false)
          clearInterval(this.timer)
        }
      }, 1500)
    }
    else{
      this.$switcherValue.next(false)
      clearInterval(this.timer)
    }
  }
}
