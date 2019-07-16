import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-complete-guide-project';
  menuActive: string = 'recipe';

  constructor() {}

  ngOnInit() {
    console.log('this.menuActive ' + this.menuActive);
  }

  activateMenu(menu) {
    console.log('menu ' + menu);
    this.menuActive = menu;
    console.log('this.menuActive ' + this.menuActive);
  }
}
