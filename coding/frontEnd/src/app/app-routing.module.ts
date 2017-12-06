import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core/src/metadata/directives';
import { Routes, RouterModule } from '@angular/router';
import { combineAll } from 'rxjs/operators/combineAll';

import { UserComponent } from './user/user.component';
import { ListBoardComponent } from './board/list-board/list-board.component';
import { LoginComponent } from 'app/common/login/login.component';
import { RegisterComponent } from 'app/common/register/register.component';
import { ViewSubscriptionComponent } from './user/view-subscription/view-subscription.component';

import { userRoutes } from './user/user-route.module';
import { boardRoutes } from './board/board-route.module';
import { adminRoutes } from './admin/admin-route.module';
import { AdminComponent } from 'app/admin/admin.component';

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
  },{
    path : 'board',
    children : boardRoutes
  },{
    path : 'admin',
    children : adminRoutes,
    component : AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
