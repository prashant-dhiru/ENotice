import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { UpdateComponent } from './update/update.component';
import { ViewProfileComponent} from './view-profile/view-profile.component';

export const userRoutes: Routes = [
  {
    path: '',
    children: [],
    component : ViewProfileComponent
  },{
    path : 'update',
    component : UpdateComponent
  }
]

