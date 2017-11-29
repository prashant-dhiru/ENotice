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

//services
import { UserService } from "./services/user.service";
import { BoardService } from './services/board.service';

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
    ViewProfileComponent
  ],
  imports: [ 
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [UserService,BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
