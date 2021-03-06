import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './common/register/register.component';
import { ListBoardComponent } from './board/list-board/list-board.component'
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { LoginComponent } from './common/login/login.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './common/footer/footer.component'
import { UpdateComponent } from './user/update/update.component';
import { ViewProfileComponent } from 'app/user/view-profile/view-profile.component';
import { ViewSingleBoardComponent } from './board/view-single-board/view-single-board.component';
import { ViewSubscriptionComponent } from './user/view-subscription/view-subscription.component';
import { ViewMembershipComponent } from './user/view-membership/view-membership.component'
import { DeleteMeComponent } from './user/delete-me/delete-me.component';
import { PostNoticeComponent } from './admin/post-notice/post-notice.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ManageBoardsComponent } from './admin/manage-boards/manage-boards.component';
import { ScrollAtBottomDirective } from './directive/scroll-at-bottom.directive';

//services

import { UserService } from "./services/user.service";
import { BoardService } from './services/board.service';
import { NoticeService } from './services/notice.service';

declare let require: any;

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    ListBoardComponent,
    UserComponent,
    FooterComponent,
    UpdateComponent,
    ViewProfileComponent,
    ViewSingleBoardComponent,
    ViewSubscriptionComponent,
    ViewMembershipComponent,
    DeleteMeComponent,
    PostNoticeComponent,
    AdminComponent,
    ManageUserComponent,
    ManageBoardsComponent,
    ScrollAtBottomDirective
  ],
  imports: [ 
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [UserService,BoardService,NoticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
