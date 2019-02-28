import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  siteName: string;

  constructor() {
    this.siteName = 'Angular in action';
  }

  ngOnInit() {
  }

}
