import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable()
export class NoticeService {

  constructor(private http:Http) { }

  getAllNoticeBoard(){
    return this.http.get(environment.apiUrl+'notices',{withCredentials:true});
  }

  getNoticeForBoard(boardId){
    return this.http.get(environment.apiUrl+'noticeForBoard/'+boardId,{withCredentials: true});
  }

  deleteNotice(noticeId){
    return this.http.delete(environment.apiUrl+'notice/'+noticeId, {withCredentials:true});
  }

  markView(noticeId){
    return this.http.get(environment.apiUrl + 'notice/viewed/'+noticeId,{withCredentials: true}); 
  }

  putNotice(noticeData){
    return this.http.put(environment.apiUrl + "notice",noticeData,{withCredentials:true}); 
  }
}