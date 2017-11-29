import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http/src/static_response';
import { error } from 'selenium-webdriver';
import { FormGroup,FormControl} from '@angular/forms';
import { FormArray } from '@angular/forms';
const Validator = require('validator');

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
    console.log(this.updateForm.value);
    this.subscription = this.userService.updateMe(this.updateForm.value).subscribe((respose: Response)=>{
      console.log(respose);
    },(error:any)=>{
      if(error.status === 400){
        console.log(error._body);     
      }else if(error.status === 500){
        console.log("internal database error");
      }else if(error.status === 401){
        console.log("you are not logged in");
      }else{
        console.log("error while fetching data");
      }
    },()=>{
      this.subscription.unsubscribe();
    });
   };
}
