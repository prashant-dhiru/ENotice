import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'app/services/notice.service';
import { Response } from '@angular/http/src/static_response';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';
import { BoardService } from 'app/services/board.service';
import { concat } from 'rxjs/observable/concat';
import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import { error } from 'selenium-webdriver';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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
  notices:any[];
  loaded:boolean;
  userId:String;
  user:any; 
  markViewSub : Subscription;
  usersViewd:any[];
  isLogedIn:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noticeService: NoticeService,
    private boardService: BoardService,
    private userService : UserService,
    private router : Router
  ) { 
    this.boardId = this.activatedRoute.snapshot.params['BoardId'];
  }
  
  ngOnInit() {

    this.userService.currentlyLogedIn.subscribe(Status => this.isLogedIn = Status);

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

  markView(noticeId:string,noticeIndex:number){
    if(this.isLogedIn == false){
      this.router.navigate(["/login"]);
      return null;
    }

    this.markViewSub = this.noticeService.markView(noticeId)
    .subscribe((response:Response)=>{
      if(this.notices[noticeIndex].userViwed.filter(uv => (uv._id === this.user._id)).length == 0)
      {
        this.notices[noticeIndex].userViwed.push({_id :this.user._id , name:this.user.name});
      }
      console.log(this.notices[noticeIndex].userViwed);
    },(error)=>{
      if(error.status === 500){
        console.error("internal database error");
      }
      else if (error.status === 404){
        console.log("notice was not found to mark as viewed, please refresh page");
      }else{
        console.log("error while marking a notice as view");
      }
    },()=>{
      this.markViewSub.unsubscribe();
    })
  }

  onSubscribe(){
    if(this.isLogedIn == false){
      this.router.navigate(["/login"]);
      return null;
    }
    this.subscription = this.boardService.subscribeBoard(this.board._id)
    .subscribe((response:Response)=>{
      this.subscribedToBoard = !this.subscribedToBoard;
    },(error)=>{
      if(error.status === 500)
        console.error("internal databse error");
      else
        console.error("error while subscribing to the board");
    },()=>{
      this.subscription.unsubscribe();
    });
  }
  onUnSubscribe(){
    this.subscription = this.boardService.unSubscribeBoard(this.board._id)
    .subscribe((response:Response)=>{
      this.subscribedToBoard = !this.subscribedToBoard;
    },(error)=>{
      if(error.status === 500)
        console.error("internal databse error");
      else
        console.error("error while subscribing to the board");
    },()=>{
      this.subscription.unsubscribe();
    });
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal(i) {
    this.usersViewd = (this.notices[i].userViwed); 
    console.log(this.notices[i].userViwed);
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
