import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { UpdateComponent } from './update/update.component';

export const userRoutes: Routes = [
  {
    path: '',
    children: []
  },{
    path : 'update',
    component : UpdateComponent
  }
]

