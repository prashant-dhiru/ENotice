import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Response } from '@angular/http'
import { Router } from '@angular/router'

import { UserService } from "../../services/user.service";
import { User } from 'app/classes/User';
import { Login } from 'app/classes/Login';

@Component({
  selector: 'enb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  subscription : Subscription;
  user : User;
  loginData : Login;

  constructor(
    private http:UserService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onSubmit(loginForm: NgForm): void {
    this.loginData = loginForm.value;
    this.subscription = this.http.LoginUser(this.loginData).subscribe((response: Response) => {
      localStorage.setItem('currentUser',JSON.stringify(response.json()));
      localStorage.setItem('loginStatus','true');
      localStorage.setItem('adminStatus',response.json().isAdmin );
      this.http.changeLoginStatus(true,response.json().isAdmin);
      this.router.navigate(['']);
    }, (error: any) => {
      if (error.status === 404) {
        console.error('user not found');
      } else if (error.status === 401) {
        console.error('A user is already loged-in');
      } else if (error.status === 403) {
        console.error('Password does not match');
      } else {
        console.error('Error Occurd while fetching user: ', error);
      }
    }, () => {
      // this callback is called when all data transfer is complete
      this.subscription.unsubscribe();
    })
  }

}
