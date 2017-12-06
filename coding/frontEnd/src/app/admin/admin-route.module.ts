import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { PostNoticeComponent } from './post-notice/post-notice.component';

export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo : '/admin/postNotice',
    pathMatch: 'full'
  },{
    path:'postNotice',
    component : PostNoticeComponent
  }

]