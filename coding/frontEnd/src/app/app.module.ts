import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { ListBoardComponent } from './board/list-board/list-board.component'
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './common/footer/footer.component'

//services
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    ListBoardComponent,
    UserComponent,
    FooterComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
