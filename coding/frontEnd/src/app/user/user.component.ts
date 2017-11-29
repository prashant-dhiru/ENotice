import { Component, OnInit } from '@angular/core';
import { ListBoardComponent } from '../board/list-board/list-board.component';

@Component({
  selector: 'enb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isAdmin = false;

  constructor() { 
  }
  
  ngOnInit() {
    this.isAdmin = (localStorage.getItem('adminStatus') === 'true')?true:false;  
  }

}
