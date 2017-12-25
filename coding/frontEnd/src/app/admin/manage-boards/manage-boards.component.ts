import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { BoardService } from 'app/services/board.service';
import { Response } from '@angular/http'
import { Jsonp } from '@angular/http/src/http';

@Component({
  selector: 'enb-manage-boards',
  templateUrl: './manage-boards.component.html',
  styleUrls: ['./manage-boards.component.css']
})
export class ManageBoardsComponent implements OnInit {

  createBoardForm:FormGroup;
  CBsubscription: Subscription;
  GBsubscription: Subscription;
  allBaords;

  constructor(
    private boardService:BoardService
  ) {
    this.createBoardForm = new FormGroup({
      'boardName' : new FormControl(),
      'discription' : new FormControl(),
      'isPrivate' : new FormControl("false")
    })

  }

  ngOnInit() {
    this.getAllBoard();
  }

  getAllBoard(){
    this.GBsubscription = this.boardService.getAllBoards()
    .subscribe((res:Response)=>{
      this.allBaords = res.json();
      console.log(this.allBaords);
    })
  }

  putBoard(){
    this.CBsubscription = this.boardService.putBoard(this.createBoardForm.value)
    .subscribe((res: Response)=>{
      this.getAllBoard();
      console.log(JSON.stringify(res));
    },(error)=>{
      if(error.status === 400){
        console.log(error.json().message);
      }else if(error.status === 500){
        console.log("Internal database error");
      }else if(error.status === 401){
        console.log(error);
      }else{
        console.log("error while creating new board");
      }
    },()=>{
      this.CBsubscription.unsubscribe();
    });
  }

  onSubmit(){
    this.putBoard();
  }
}
