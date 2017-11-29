import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http/src/static_response';
import { error } from 'selenium-webdriver';
import { FormGroup,FormControl,Validator } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'enb-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  subscription : Subscription;
  user:any;
  postUser:object;
  updateForm : FormGroup;

  constructor(  private userService:UserService) {
  }
  
  ngOnInit() {
    this.updateForm = new FormGroup({
      name : new FormControl(),
      email : new FormControl(''),
      phone : new FormControl('')
    });

    this.subscription = this.userService.getMe().subscribe((response:Response)=>{
      this.user = response.json();
      this.updateForm.setValue({
        name:this.user.name,
        email:this.user.email,
        phone:this.user.phone
      });
    },(error) =>{
      console.log("Error while fetching user info to update");
    },()=>{
      this.subscription.unsubscribe();
    });
  };

  onUpdate(){
    console.log();
    // this.subscription = this.userService.updateMe(this.updateForm).subscribe((respose: Response)=>{
    //   console.log(respose);
    // },(error:any)=>{
    //   if(error.status === 400){
    //     console.log(error._body);     
    //   }else if(error.status === 500){
    //     console.log("internal database error");
    //   }else if(error.status === 401){
    //     console.log("you are not logged in");
    //   }
    // },()=>{
    //   this.subscription.unsubscribe();
    // });
  };
}
