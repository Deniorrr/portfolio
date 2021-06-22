import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  //for background color
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'pierwszy';
}


