import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable()
export class BoardService {

	constructor(private http: Http) { 
	}
	getAllBoards(){
		return this.http.get( environment.apiUrl+'boards', {withCredentials: true});
	}
	getBoard(BoardId){
		return this.http.get(environment.apiUrl+"board/"+BoardId,{withCredentials : true});
	}
	getAllSubscribedBoard(){
		return this.http.get(environment.apiUrl+"getAllSubscribedBoard",{withCredentials:true});
	}
	getAllMembershipBoard(){
		return this.http.get(environment.apiUrl+"getAllMembershipBoard",{withCredentials:true});
	}
	subscribeBoard(BoardId){
		return this.http.get(environment.apiUrl+"subscribe/"+BoardId ,{withCredentials:true});
	}
	unSubscribeBoard(BoardId){
		return this.http.get(environment.apiUrl+"unSubscribe/"+BoardId ,{withCredentials:true});
	}
}
