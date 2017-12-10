import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';
import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'enb-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  
  allUser :any[];
  filteredUser: any[];
  subscription : Subscription;
  CASsubscription : Subscription;
  DUsubscriptin : Subscription;
  me;

  constructor(
    private userService : UserService
  ){
    this.me = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.me);
  }

  ngOnInit() {
    this.getAllUsers();
  }


  // event emitter for modals
  selectedUser : any
  confirmAdminActions = new EventEmitter<string|MaterializeAction>();
  openConfirmAdmin(i){
    this.selectedUser = this.allUser[i];
    this.confirmAdminActions.emit({action:"modal",params:['open']});
  }
  closeConfirmAdmin(){
    this.confirmAdminActions.emit({action:"modal",params:['close']});
    this.selectedUser = null;
  }

  confirmDeleteActions = new EventEmitter<string|MaterializeAction>();
  openConfirmDelete(i){
    this.selectedUser = this.allUser[i];
    this.confirmDeleteActions.emit({action:"modal",params:['open']});
  }
  closeConfirmDelete(){
    this.confirmDeleteActions.emit({action:"modal",params:['close']});
    this.selectedUser = null;
  }


  getAllUsers(){
    this.subscription = this.userService.getAllUser()
    .subscribe((res : Response)=>{
      this.allUser = res.json();
      console.log(this.allUser);
    },(error)=>{
      if(error.status === 404){
        console.error("no users found");
      }else{
        console.log("error while fetching all users");
      }
    },()=>{
      this.subscription.unsubscribe();
    })
  }
  onFilter(){}
  deleteUser(){}
  changeAdminStatus(){
     this.CASsubscription = this.userService.changeAdminStatus(this.selectedUser._id).subscribe((res:Response)=>{
      this.selectedUser = null;
      this.getAllUsers();
      console.log(res);
    },(error)=>{
      if(error.status === 404){
        console.log("this user was not found");
      }else if(error.status === 401){
        console.log(error.message);
      }else{
        console.log("error while changing the user admin status");
      }
    },()=>{
      this.CASsubscription.unsubscribe();
    });
  }
}
