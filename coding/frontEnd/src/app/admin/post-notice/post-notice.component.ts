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

  @ViewChild("fileInput") fileInput;

  postForm:FormGroup;
  subscription: Subscription;
  allBoards : any[];

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
  }

  getBoard(){
    this.subscription = this.boardService.getAllBoards().subscribe((response : Response )=>{
      this.allBoards = response.json();
    },(error) =>{
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

  addFile():void{
    let fi = this.fileInput.nativeElement;
    if ( fi.files && fi.files[0] ){
      let fileToUpload = fi.files;
      this.postForm.patchValue({"attachedFiles":fileToUpload}) 
    }
  }
}
