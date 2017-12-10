import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BoardService } from 'app/services/board.service';
import { Response } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NoticeService } from 'app/services/notice.service';
import { concat } from 'rxjs/observable/concat';
import { FormArray } from '@angular/forms/src/model';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'enb-post-notice',
  templateUrl: './post-notice.component.html',
  styleUrls: ['./post-notice.component.css']
})
export class PostNoticeComponent implements OnInit {

  postForm:FormGroup;
  subscription: Subscription;
  dSubscription:Subscription;
  Nsubscription : Subscription;
  allBoards : any[];
  allNotices : any[];
  filesToUpload : Array<File> = []; 
  myDate;
  constructor(
    private boardService : BoardService,
    private noticeService : NoticeService
  ) { 
    this.postForm = new FormGroup({
      'title' : new FormControl(),
      'textData' : new FormControl(),
      'publishBoards' : new FormControl(),
      'attachedFiles' : new FormControl()
    });
  }

  ngOnInit() {
    this.getBoard();
    this.getNotice();
  }

  getBoard(){
    this.Nsubscription = this.boardService.getAllBoards().subscribe((response : Response )=>{
      this.allBoards = response.json();
    },(error) =>{
      if(error.status === 500){
       console.log("internal databse error"); 
      }else{
        console.log("error while fetching board");
      }
    },()=>{
      this.Nsubscription.unsubscribe();
    });
  }

  getNotice(){
    this.subscription = this.noticeService.getAllNoticeBoard()
    .subscribe((res : Response)=>{
      console.log(res.json());
      this.allNotices = res.json();
    },(error)=>{
      if(error.status === 500){
        console.log("internal databse error"); 
      }else{
        console.log("error while fetching board");
      }
    },()=>{
      this.subscription.unsubscribe();
    });
  }
  
  putNotice(){
    this.subscription = this.noticeService.putNotice(this.postForm.value)
    .subscribe((response : Response)=>{
      console.log("notice hase been posted");
    },(error)=>{
      if(error.status === 500){
        console.error("internal database error");
      }else if(error.status === 401 ){
        console.error(error.value);
      }else{
        console.error("error while posting notice");
      }
    });
  }

  onSubmit(){
    if(this.postForm.value.publishBoards == null || this.postForm.value.publishBoards.length==0){
      console.error("please select a baord ");
      return;
    }
    
    console.log(this.postForm.value);
    this.putNotice();
  }

  onClear(){
    this.getNotice();
    this.myDate = "";
  }

  onSameDate(noticeDate, selectedDate) {
    let nDate = new Date(noticeDate); 
    return nDate.getFullYear() === selectedDate.getFullYear() &&
      nDate.getMonth() === selectedDate.getMonth() &&
      nDate.getDate() === selectedDate.getDate();
  }        

  onFilter(dateStr : string){
    let sDate = new Date(dateStr); 
    this.allNotices = this.allNotices.filter(
      notice => this.onSameDate(notice.publishDate,sDate)     
    );
  }

  onDelete(noticeId){
    this.dSubscription = this.noticeService.deleteNotice(noticeId).subscribe((res: Response)=>{
      setTimeout(()=>{
        this.getNotice();
      },2000);
    },(error)=>{
      if(error.status == 404){
        console.error("no notice was found to delete");
      }else{
        console.error("error while deleting notice");
      }
    },()=>{
      this.dSubscription.unsubscribe();
    });
  }
  
}
