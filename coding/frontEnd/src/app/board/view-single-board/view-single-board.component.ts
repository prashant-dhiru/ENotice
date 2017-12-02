import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'app/services/notice.service';
import { Response } from '@angular/http/src/static_response';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';
import { BoardService } from 'app/services/board.service';

@Component({
  selector: 'enb-view-single-board',
  templateUrl: './view-single-board.component.html',
  styleUrls: ['./view-single-board.component.css']
})
export class ViewSingleBoardComponent implements OnInit {

  boardId: string;
  subscription:Subscription;
  boardSubscription:Subscription;
  board:any;
  subscribedToBoard:boolean;
  notices:any;
  loaded:boolean;
  userId:String;
  user:any; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private noticeService: NoticeService,
    private boardService: BoardService
  ) { 
    this.boardId = this.activatedRoute.snapshot.params['BoardId'];
  }
  
  ngOnInit() {
    this.boardSubscription = this.boardService.getBoard(this.boardId).subscribe((response:Response)=>{
      this.board = response.json();
      console.log(this.board);
      this.user = JSON.parse( localStorage.getItem('currentUser'));
      this.subscribedToBoard = this.board.subscriberList.includes(this.user._id);
    },(error)=>{
      if(error.status === 404){
        console.log("board was not found");
      }else if(error.status === 500){
        console.log("internal database error");
      }else{
        console.log("error while fetching data");
      }
    },()=>{
      this.boardSubscription.unsubscribe();
    });

    this.subscription = this.noticeService.getNoticeForBoard(this.boardId).subscribe((response:Response)=>{
      this.notices = response.json();
      this.loaded = true;
    },(error)=>{
      if (error.status === 404){
        console.log("no notice hosted on this board");
      }else{
        console.error('error while fetching the boards');
      }
    },()=>{
      this.subscription.unsubscribe();
    });
    
  }


}
