import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  alertType: string;
  message: string;

  constructor() {
    this.alertType = 'success';
    this.message = 'Some message';
  }

  ngOnInit() {
  }

  getAlertType() {
    setTimeout(() => this.alertType = 'warning', 120);
  }
}
