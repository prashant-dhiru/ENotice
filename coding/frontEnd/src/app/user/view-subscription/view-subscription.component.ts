import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BoardService } from 'app/services/board.service';
import { Response } from '@angular/http/src/static_response';


@Component({
  selector: 'enb-view-subscription',
  templateUrl: './view-subscription.component.html',
  styleUrls: ['./view-subscription.component.css']
})
export class ViewSubscriptionComponent implements OnInit {
  
  boards : any;
  subscription : Subscription;
  
  constructor(
   private boardService : BoardService
  ) { }

  ngOnInit() {
    this.subscription = this.boardService.getAllSubscribedBoard()
    .subscribe((respose:Response)=>{
      this.boards = respose.json();
      console.log(this.boards);
    },(error)=>{
    },()=>{
      this.subscription.unsubscribe();
    })
  }

}
