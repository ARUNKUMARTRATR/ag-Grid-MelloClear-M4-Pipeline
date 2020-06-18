import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = 'Isaac Jerome';
  menuTitle = 'Underwriter';
  constructor() {
  }
  title = 'ag-grid-melloclear-app';
  onMenuChange(title: string) {
    this.menuTitle = title;
  }
}
