import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  constructor(){
    setTimeout(() => {
      this.title = "rajiv says hello world"
    }, 1000);
  }
}
