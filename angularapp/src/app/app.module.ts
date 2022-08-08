import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminViewBookComponent } from './admin-view-book/admin-view-book.component';
import { AdminEditBookComponent } from './admin-edit-book/admin-edit-book.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserViewBookComponent } from './user-view-book/user-view-book.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminViewBookDetailComponent } from './admin-view-book-detail/admin-view-book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    LoginComponent,
    AdminAddBookComponent,
    AdminHomeComponent,
    AdminViewBookComponent,
    AdminEditBookComponent,
    UserHomeComponent,
    UserViewBookComponent,
    AdminNavComponent,
    AdminViewBookDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
