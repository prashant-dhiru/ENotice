import { Component } from '@angular/core';

@Component({
  selector: 'enb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enb works!';
  constructor(){
    document.body.style.background = '#f5f5f5';
  }
}
