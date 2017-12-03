import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { UpdateComponent } from './update/update.component';
import { ViewProfileComponent} from './view-profile/view-profile.component';
import { ViewSubscriptionComponent } from 'app/user/view-subscription/view-subscription.component';
import { ViewMembershipComponent } from 'app/user/view-membership/view-membership.component';

export const userRoutes: Routes = [
  {
    path: '',
    children: [],
    component : ViewProfileComponent
  },{
    path : 'update',
    component : UpdateComponent
  },{
    path:'subscribed',
    component : ViewSubscriptionComponent
  },{
    path: 'membership',
    component : ViewMembershipComponent
  }
]

