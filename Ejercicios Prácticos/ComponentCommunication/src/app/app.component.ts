import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parentMsg: string = '';
  childMsg: string = '';

  title = 'ComponentCommunication';

  constructor(public communicationService: CommunicationService){
    this.communicationService.messageChild$.subscribe(
      (msg)=> (this.parentMsg = msg)
    );
  }

  input(){
    console.log('Parent using Input property')
    this.childMsg = 'Parent using Input Property'
  }

  output(msg: string){
    console.log('Child using Output event')
    this.parentMsg = msg;
  }

  service(){
    console.log('parent using service')
    this.communicationService.msgFromServiceToParent('parent using service')
  }



}
