import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BoardService } from 'app/services/board.service';
import { Response } from '@angular/http'; 
@Component({
  selector: 'enb-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  isAdmin = false;
  
  constructor(
    private boardService : BoardService
  ){ }
  
  ngOnInit() {
    this.isAdmin = (localStorage.getItem('adminStatus') === 'true')?true:false;  
  }
}
