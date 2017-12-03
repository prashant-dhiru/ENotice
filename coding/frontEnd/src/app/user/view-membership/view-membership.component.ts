import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BoardService } from 'app/services/board.service';
import { Response } from '@angular/http';

@Component({
  selector: 'enb-view-membership',
  templateUrl: './view-membership.component.html',
  styleUrls: ['./view-membership.component.css']
})
export class ViewMembershipComponent implements OnInit {

  boards : any;
  subscription : Subscription;
  
  constructor(
   private boardService : BoardService
  ) { }

  ngOnInit() {
    this.subscription = this.boardService.getAllMembershipBoard()
    .subscribe((respose:Response)=>{
      this.boards = respose.json();
      console.log(this.boards);
    },(error)=>{
    },()=>{
      this.subscription.unsubscribe();
    })
  }
}
