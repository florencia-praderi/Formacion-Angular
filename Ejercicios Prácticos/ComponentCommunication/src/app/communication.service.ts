import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private _msgChild = new Subject<string>();
  private _msgParent = new Subject<string>();

  messageChild$ = this._msgChild.asObservable();
  messageParent$ = this._msgParent.asObservable();  

  constructor() {}

  //Service
  msgFromServiceToParent(msg: string){
    this._msgParent.next(msg)
  }

  msgFromServiceToChild(msg: string){
    this._msgChild.next(msg)
  }

  //Observable
  msgObservableToParent(){
    return this._msgParent.next('parent using subject')
  }

  msgObservableToChild(){
    return this._msgChild.next('child using subject')
  }
}
