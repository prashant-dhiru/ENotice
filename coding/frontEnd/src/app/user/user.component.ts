import { Component, OnInit } from '@angular/core';
import {} from './login/login.component'

@Component({
  selector: 'enb-user',
  template: `
    <router-outlet>
    </router-outlet>
    `
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
