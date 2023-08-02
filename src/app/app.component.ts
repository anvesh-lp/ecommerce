import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce';
  currentWindow: string = "recipe";

  currentWindowEmitted(event: string) {
    this.currentWindow = event;
  }

}
