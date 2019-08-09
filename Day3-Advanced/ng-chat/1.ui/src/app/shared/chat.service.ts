import { Injectable } from '@angular/core';
import { Message } from '../types';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = "http://localhost:3000";
  socket;
  messages:Message[] = [];
  connection;
  observable: Observable<any>;

  constructor() {
    this.socket = io(this.url);

    this.connection = this.onMessageReceived().subscribe((message:string) => {
      this.messages.push({
        text: message
      });
    })
  }

  getMessages():Array<Message> {
    return this.messages;
  }

  sendMessage(message:string) {
    this.socket.emit('chat message', message);
  }

  onMessageReceived() {
    this.observable = new Observable(observer => {
      this.socket.on('chat message', data => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    })

    return this.observable;
  }
}
