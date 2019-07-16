import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() menuActive = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  activate(menu: string) {
    console.log('menu ' + menu);
    this.menuActive.emit(menu);
  }
}
