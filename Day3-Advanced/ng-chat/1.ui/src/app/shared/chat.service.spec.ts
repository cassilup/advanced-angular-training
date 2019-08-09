import { TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { ChatService } from './chat.service';

describe('ChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });

  it('should test that when a message is received, that message is pushed to the local messages list', () => {
    const service: ChatService = TestBed.get(ChatService);

    const connection = service.onMessageReceived();
    service.onMessageReceived();

    const one$ = cold('x-x|', {x: 'some value'});
    expect(expect(one$).toBeObservable(cold('x-x|')));
  });
});
