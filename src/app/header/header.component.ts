import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  siteName: string;
  @Output() pageSelected = new EventEmitter<string>();

  constructor() {
    this.siteName = 'Angular in action';
  }

  ngOnInit() {
  }

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }
}
