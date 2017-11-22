import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enb-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAdmin : boolean = true;
  isLogedIn : boolean = false;

  constructor() {
   }

  ngOnInit() {
  }

}
