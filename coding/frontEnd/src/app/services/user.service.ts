import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../classes/User';
import { Login } from '../classes/Login';
import { environment } from "../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  private isLogedIn = new BehaviorSubject<boolean>((localStorage.getItem('loginStatus')==='true')?true:false);
  currentlyLogedIn = this.isLogedIn.asObservable();
  
  private isAdmin = new BehaviorSubject<boolean>((localStorage.getItem('adminStatus')==='true')?true:false);
  currentlyAdmin = this.isAdmin.asObservable();


  getAllUser():Observable<Response>{
    return this.http.get(environment.apiUrl+'users',{withCredentials:true});
  }

  registerUser(user):Observable<Response>{
    return this.http.put(environment.apiUrl+'user',user, {withCredentials: true});
  }
    
  LoginUser(login:Login):Observable<Response>{
    return this.http.post(environment.apiUrl+'user/login', login, { withCredentials: true });
  }

  logoutUser():Observable<Response>{
    return this.http.post(environment.apiUrl+'user/logout',{}, { withCredentials: true });
  }

  getMe():Observable<Response>{
    return this.http.get(environment.apiUrl+'me',{withCredentials:true});
  }

  updateMe(user):Observable<Response>{
    return this.http.patch(environment.apiUrl+'user',user,{withCredentials:true});
  }
  changeAdminStatus(UserId){
    return this.http.get(environment.apiUrl+"user/changeAdminStatus/"+UserId,{withCredentials:true});
  }
  deleteUserByAdmin(userId){
    return this.http.delete(environment.apiUrl+"user/"+userId,{withCredentials:true});
  }


  changeLoginStatus(loginStatus:boolean ,adminStatus:boolean ){
    this.isLogedIn.next(loginStatus);
    this.isAdmin.next(adminStatus);
  }
}
