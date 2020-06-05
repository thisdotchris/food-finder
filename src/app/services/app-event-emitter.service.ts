import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppEventEmitterService {

  private messageSource = new Subject<any>();
  message$ = this.messageSource.asObservable();

  constructor() {
  }

  sendMessage(m: any) {
    this.messageSource.next(m);
  }

}
