import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CommsService} from './services/comms/comms.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  echoMessages: String[] =[];
  echoSub: Subscription;
  newEcho: string;

  constructor(private comms: CommsService){};


  sendEcho(){
    this.comms.sendMsg("echo",this.newEcho);
  }

  ngOnInit(){
    this.echoSub = this.comms.echoMessage.subscribe(message => {
      console.log(message);
      if(message){
        this.echoMessages.push(message);
      }
    });
  }

  ngOnDestroy(){
    if(this.echoSub){
      this.echoSub.unsubscribe();
    }
  }

}
