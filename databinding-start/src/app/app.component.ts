import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showStuff = false;
  property1 = 'oddly-satisfying';
  anchorRef = 'https://www.google.fi';
  inputValue = '';
  onClickButton() {
    this.showStuff = !this.showStuff;
  }
}
