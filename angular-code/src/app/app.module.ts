import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LabviewService } from './services/labview/labview.service';
import { WebsocketService } from './services/websocket/websocket.service';
import {CommsService} from './services/comms/comms.service';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LabviewService, WebsocketService, CommsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
