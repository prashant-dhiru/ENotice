import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const userRoutes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'register',
    component : RegisterComponent
  }
]

