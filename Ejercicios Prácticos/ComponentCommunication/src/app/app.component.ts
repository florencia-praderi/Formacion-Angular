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
    this.communicationService.getMsgChild().subscribe(
      (msg)=>{this.parentMsg = msg}
    )
  }

  input(){
    this.childMsg = 'Parent using Input Property'
  }

  output(msg: string){
    this.parentMsg = msg;
  }

  service(){
    this.communicationService.msgFromServiceToParent('parent using service')
  }

  observable(){
    this.communicationService.msgObservableToParent()
  }

}
