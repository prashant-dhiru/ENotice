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
}
