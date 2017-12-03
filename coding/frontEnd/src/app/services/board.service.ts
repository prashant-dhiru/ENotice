import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BoardService {

	constructor(private http: Http) { 
	}
	getAllBoards(){
		return this.http.get('http://localhost:3000/boards', {withCredentials: true});
	}

	getBoard(BoardId){
		return this.http.get("http://localhost:3000/board/"+BoardId,{withCredentials : true});
	}
	getAllSubscribedBoard(){
		return this.http.get("http://localhost:3000/getAllSubscribedBoard",{withCredentials:true});
	}
	getAllMembershipBoard(){
		return this.http.get("http://localhost:3000/getAllMembershipBoard",{withCredentials:true});
	}
	subscribeBoard(BoardId){
		return this.http.get("http://localhost:3000/subscribe/"+BoardId ,{withCredentials:true});
	}
	unSubscribeBoard(BoardId){
		return this.http.get("http://localhost:3000/unSubscribe/"+BoardId ,{withCredentials:true});
	}
}
