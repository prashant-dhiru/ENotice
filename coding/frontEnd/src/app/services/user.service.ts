import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../classes/User';
import { Login } from '../classes/Login';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  private isLogedIn = new BehaviorSubject<boolean>((localStorage.getItem('loginStatus')==='true')?true:false);
  currentlyLogedIn = this.isLogedIn.asObservable();
  
  private isAdmin = new BehaviorSubject<boolean>((localStorage.getItem('adminStatus')==='true')?true:false);
  currentlyAdmin = this.isAdmin.asObservable();


  registerUser(user):Observable<Response>{
    return this.http.put('http://localhost:3000/user',user, {withCredentials: true});
  }
    
  LoginUser(login:Login):Observable<Response>{
    return this.http.post('http://localhost:3000/user/login', login, { withCredentials: true });
  }

  logoutUser():Observable<Response>{
    return this.http.post('http://localhost:3000/user/logout',{}, { withCredentials: true });
  }

  getMe():Observable<Response>{
    return this.http.get('http://localhost:3000/me',{withCredentials:true});
  }

  updateMe(user):Observable<Response>{
    return this.http.patch('http://localhost:3000/user',user,{withCredentials:true});
  }
  changeLoginStatus(loginStatus:boolean ,adminStatus:boolean ){
    this.isLogedIn.next(loginStatus);
    this.isAdmin.next(adminStatus);
  }
}
