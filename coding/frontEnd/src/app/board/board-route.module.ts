import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { ViewSingleBoardComponent } from './view-single-board/view-single-board.component'

export const boardRoutes: Routes = [
  {
    path: '',
    children: [],
  },{
    path : ':BoardId',
    component : ViewSingleBoardComponent
  },
]

