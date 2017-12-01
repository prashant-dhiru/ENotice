import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'app/services/notice.service';
import { Response } from '@angular/http/src/static_response';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'enb-view-single-board',
  templateUrl: './view-single-board.component.html',
  styleUrls: ['./view-single-board.component.css']
})
export class ViewSingleBoardComponent implements OnInit {

  boardId: string;
  subscription:Subscription;
  notices:any;
  loaded:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noticeService: NoticeService
  ) { 
    this.boardId = this.activatedRoute.snapshot.params['BoardId'];
  }

  ngOnInit() {
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
