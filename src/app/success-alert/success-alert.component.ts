import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.less']
})
export class SuccessAlertComponent implements OnInit {
  message: any;

  constructor() {
    this.message = 'Success message there';
  }

  ngOnInit() {
  }

}
