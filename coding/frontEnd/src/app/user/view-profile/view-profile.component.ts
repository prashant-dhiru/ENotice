import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'app/services/user.service';
import { Response } from '@angular/http/src/static_response';


@Component({
  selector: 'enb-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  subscription : Subscription;
  user : any;
  
  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.subscription = this.userService.getMe().subscribe((response:Response)=>{
      this.user = response.json();
    },(error) =>{
      console.log("Error while fetching user info to update");
    },()=>{
      this.subscription.unsubscribe();
    });
  }

}
