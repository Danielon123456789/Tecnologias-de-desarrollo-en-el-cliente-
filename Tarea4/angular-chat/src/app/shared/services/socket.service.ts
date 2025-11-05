import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  private readonly SERVER_URL = 'http://localhost:3000';

  constructor() {
    this.socket = io(this.SERVER_URL);
  }

  userConnected(username: string): void {
    this.socket.emit('user_connected', username);
  }


  sendMessage(data: { username: string; text: string }): void {
    this.socket.emit('message', data);
  }

  onUserList(): Observable<string[]> {
  return new Observable(observer => {
    this.socket.on('user_list', (userList: string[]) => {
      observer.next(userList);
    });
  });
}

onUserDisconnected(): Observable<string> {
  return new Observable(observer => {
    this.socket.on('user_disconnected', (username: string) => {
      observer.next(username);
    });
  });
}



  onMessage(): Observable<{ username: string; text: string }> {
    return new Observable(observer => {
      this.socket.on('message', (data: { username: string; text: string }) => {
        observer.next(data);
      });
    });
  }


  onUserConnected(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('user_connected', (username: string) => {
        observer.next(username);
      });
    });
  }
}
