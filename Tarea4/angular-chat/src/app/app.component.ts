import { Component } from '@angular/core';
import { SocketService } from './shared/services/socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username = '';
  message = '';
  messages: { username: string; text: string }[] = [];
  connectedUsers: string[] = [];
  joined = false;

  constructor(private socketService: SocketService) {}

  joinChat() {
  if (!this.username.trim()) return;
  this.joined = true;
  this.socketService.userConnected(this.username);

  this.socketService.onMessage().subscribe(msg => {
    this.messages.push(msg);
  });

  this.socketService.onUserConnected().subscribe(username => {
    if (!this.connectedUsers.includes(username)) {
      this.connectedUsers.push(username);
    }
  });

  this.socketService.onUserList().subscribe(list => {
    this.connectedUsers = list;
  });

  this.socketService.onUserDisconnected().subscribe(username => {
    this.connectedUsers = this.connectedUsers.filter(u => u !== username);
  });
}


  sendMessage() {
    if (!this.message.trim()) return;
    const data = { username: this.username, text: this.message };
    this.socketService.sendMessage(data);
    this.message = '';
  }
}
