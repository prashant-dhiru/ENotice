import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http/src/static_response';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'enb-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{  
  subscription : Subscription;
  isLogedIn : boolean;
  isAdmin : boolean;

  constructor(
    private userService:UserService,
    private router : Router  
  ) 
  {
  //this.isLogedIn = (false || Boolean(localStorage.getItem('loginStatus')));
  //this.isAdmin = (false || Boolean(localStorage.getItem('adminStatus')));
  //console.log(this.isLogedIn);
  //console.log(this.isAdmin);
  }

  ngOnInit(){
    this.userService.currentlyLogedIn.subscribe(Status => this.isLogedIn = Status);
    this.userService.currentlyAdmin.subscribe(Status => this.isAdmin = Status);   
  }

  logOut():void{
    this.subscription = this.userService.logoutUser().subscribe((response : Response)=>{
      localStorage.removeItem('currentUser');
      localStorage.setItem('loginStatus','false');
      localStorage.setItem('adminStatus','false');
      this.userService.changeLoginStatus(false,false);
      this.router.navigate(['/user','login']);
    },(error : any)=>{
      if(error.status === 401){
        console.error("you are not Logged-In");
      }else{
        console.error("Error Occured while loggin you out");
      }
    },()=>{
      this.subscription.unsubscribe(); 
    })
  }
}
