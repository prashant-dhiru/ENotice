import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { PostNoticeComponent } from './post-notice/post-notice.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageBoardsComponent } from 'app/admin/manage-boards/manage-boards.component';
 
export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo : '/admin/postNotice',
    pathMatch: 'full'
  },{
    path:'postNotice',
    component : PostNoticeComponent
  },{
    path:'manageUser',
    component : ManageUserComponent
  },{
    path:'manageBoards',
    component : ManageBoardsComponent
  }

]