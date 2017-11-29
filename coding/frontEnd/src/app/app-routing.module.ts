import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userRoutes } from './user/user-route.module';
import { UserComponent } from './user/user.component';
import { ListBoardComponent } from './board/list-board/list-board.component';
import { Component } from '@angular/core/src/metadata/directives';
import { LoginComponent } from 'app/common/login/login.component';
import { combineAll } from 'rxjs/operators/combineAll';
import { componentFactoryName } from '@angular/compiler';
import { RegisterComponent } from 'app/common/register/register.component';

const routes: Routes = [
  {
    path : '',
    children : [],
    component : ListBoardComponent
    
  },
  {
    path : 'user',
    children : userRoutes,
    component : UserComponent
  },{
    path : 'boards',
    component : ListBoardComponent
  },{
    path:'login',
    component : LoginComponent
  },{
    path :'register',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
