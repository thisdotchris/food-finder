import { TestBed } from '@angular/core/testing';

import { AppEventEmitterService } from './app-event-emitter.service';

describe('AppEventEmitterService', () => {
  let service: AppEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
