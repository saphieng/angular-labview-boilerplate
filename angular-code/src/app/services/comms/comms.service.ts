import { Injectable} from '@angular/core';
import {LabviewService, Message} from '../labview/labview.service';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class Heartbeat {
  heartbeat: number;
}

@Injectable()
export class CommsService {
  heartbeat: BehaviorSubject<Number> = new BehaviorSubject(0);
  echoMessage: BehaviorSubject<String> = new BehaviorSubject(null);
  unknownMessage: BehaviorSubject<String> = new BehaviorSubject(null);

  constructor(private labview: LabviewService) {
    //parse recieved messages
    this.labview.messages.subscribe(msg => {
      switch(msg.Command){
        case  'echo':{
          this.echoMessage.next(msg.Data);
          break;
        }
        case  'unknown':{
          this.unknownMessage.next(msg.Data);
          break;
        }
        case  'heartbeat':{
          const hb = Object.create(Heartbeat.prototype);
          const newBeat = <Heartbeat>Object.assign(hb, JSON.parse(msg.Data));
          this.heartbeat.next(newBeat.heartbeat);
          break;
        }
        default:{
          console.log("Unknown Message recieved: "+msg.Data);
          break;
        }

      }
    });
   }

  //Sendmessage to controller via websocket services 
  public sendMsg(command: string, data: string){
    this.labview.messages.next({Command: command, Data: data});
  }

}
