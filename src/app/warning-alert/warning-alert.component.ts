import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.less']
})
export class WarningAlertComponent implements OnInit {
  message: any;

  constructor() {
    this.message = 'Warning here dude!';
  }

  ngOnInit() {
  }

}
