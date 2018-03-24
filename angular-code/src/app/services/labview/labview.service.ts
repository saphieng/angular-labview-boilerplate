import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from '../websocket/websocket.service';

const SERVER_URL = 'ws://192.168.0.19:6139';

export class Message {
  Command: string;
  Data: string;
}

@Injectable()
export class LabviewService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService
      .connect(SERVER_URL)
      .map((response: MessageEvent): Message => {
        const data = JSON.parse(response.data);
        // console.log(data);
        // console.log(data.Command);
        // console.log(data.Data);
        const message = new Message();
        message.Command = data.Command;
        message.Data = data.Data;
        return message;
      });
  }

}
