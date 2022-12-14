import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  @Input() childMsg: string = '';
  @Output() outputFromChild: EventEmitter<string> = new EventEmitter();

  constructor(private communicationService: CommunicationService) { 
    communicationService.messageParent$.subscribe(
      (msg)=>(this.childMsg = msg)
    );
  }

  ngOnInit(): void {
  }

  service(){
    this.communicationService.msgFromServiceToChild('child using service')
  }

  output(){
    this.outputFromChild.emit('child using output event')
  }

  observable(){
    this.communicationService.msgObservableToChild()
  }

}
