import { Component, OnInit, HostListener } from '@angular/core';
import { Board } from '../../classes/board';
import { Subscription } from 'rxjs/Subscription';

import { BoardService } from '../../services/board.service'
import { Response } from '@angular/http/src/static_response';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'enb-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css']
})
export class ListBoardComponent implements OnInit {

  subscription : Subscription ;
  boards;
  constructor(private boardService : BoardService) {}

  ngOnInit() {
    this.getAllBoard();
  }

  getAllBoard(){
    this.subscription = this.boardService.getAllBoards().subscribe((response : Response)=>{
      this.boards = response.json();
      console.log(this.boards);
    },(error: any)=>{
      console.log('error occured while fetching the boards');
    },()=>{
      this.subscription.unsubscribe();
    })
  }
}
