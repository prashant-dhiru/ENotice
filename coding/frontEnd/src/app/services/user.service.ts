import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from '../classes/User';
import { Login } from '../classes/Login';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private isLogedIn = new BehaviorSubject<boolean>(false);
  currentlyLogedIn = this.isLogedIn.asObservable();
  
  private isAdmin = new BehaviorSubject<boolean>(false);
  currentlyAdmin = this.isAdmin.asObservable();

  constructor(private http: Http) {}

  registerUser(user:User):Observable<Response>{
    return this.http.put('http://localhost:3000/user', user);
  }
    
  LoginUser(login:Login):Observable<Response>{
    return this.http.post('http://localhost:3000/user/login', login, { withCredentials: true });
  }

  logoutUser():Observable<Response>{
    return this.http.post('http://localhost:3000/user/logout',{}, { withCredentials: true });
  }

  changeLoginStatus(loginStatus:boolean ,adminStatus:boolean ){
    this.isLogedIn.next(loginStatus);
    this.isAdmin.next(adminStatus);
  }
}
