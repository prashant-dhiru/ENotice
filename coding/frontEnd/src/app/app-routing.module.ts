import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userRoutes } from './user/user-route.module';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path : '',
    children : []
  },
  {
    path : 'user',
    children : userRoutes,
    component : UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
