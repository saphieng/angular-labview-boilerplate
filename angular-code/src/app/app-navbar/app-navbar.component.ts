import { Component, OnInit } from '@angular/core';
import {CommsService} from '../services/comms/comms.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private comms: CommsService) { }

  ngOnInit() { this.comms.heartbeat
  }
}
