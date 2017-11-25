import { Component, OnInit } from '@angular/core';
import { Board } from '../../classes/board';

@Component({
  selector: 'enb-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css']
})
export class ListBoardComponent implements OnInit {

  board : Board; 
  constructor() {}

  ngOnInit() {
    this.board = new Board('staff',3,'this is a board for staff');
  }

}
