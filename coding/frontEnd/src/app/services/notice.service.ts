import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoticeService {

  constructor(private http:Http) { }

  getNoticeForBoard(boardId){
    return this.http.get('http://localhost:3000/noticeForBoard/'+boardId,{withCredentials: true});
  }

  markView(noticeId){
    return this.http.get('http://localhost:3000/notice/viewed/'+noticeId,{withCredentials: true});
    
  }
}