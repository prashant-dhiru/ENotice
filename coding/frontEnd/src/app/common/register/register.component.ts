import { UserService } from 'app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { Subscription } from 'rxjs/Subscription';

import {RegisterData} from '../../classes/RegisterData'
import { Response } from '@angular/http/src/static_response';
@Component({
  selector: 'enb-register',
  templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	//variable for form and data
	name:string;
	regData;
	regForm : FormGroup;

	//subscription variavle
	subscription : Subscription;

  constructor(
		private userService : UserService,
		private router : Router
	) {
		this.regForm = new FormGroup({
			'first_name' : new FormControl(),
			'last_name' : new FormControl(),
			'email': new FormControl(),
			'password' : new FormControl(),
			'rtpassword' : new FormControl()
		});
  }

  ngOnInit() {
  }
  onSubmit(){
		// ready data from regFrom for the service
		this.regData = this.regForm.value;
		this.regData = _.omit(this.regData,['first_name','last_name']);
		this.name = this.regForm.value.first_name + " " + this.regForm.value.last_name;
		this.regData = _.merge(this.regData,{'name':this.name })
		//console.log(this.regData);
		//calling service
		this.subscription = this.userService.registerUser(this.regData).subscribe((response:Response)=>{
			console.log("user registerd");
			this.router.navigate(['']);
		},(error : any)=>{
			if (error.status === 400) {
        console.error(error._body);
      } else if (error.status === 500) {
        console.error('Internal server error');
      } else {
        console.error('Error Occurd while registering user: ', error);
      }
		})

  }
}