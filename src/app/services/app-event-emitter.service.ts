import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppEventEmitterService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  constructor() {}

  send(data: any) {
    this.messageSource.next(data);
  }
}
