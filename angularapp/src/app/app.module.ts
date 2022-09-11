import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

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
import { UserNavComponent } from './user-nav/user-nav.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ToastrModule } from 'ngx-toastr';

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
    UserNavComponent,
    FooterComponent,
    UserProfileComponent,
    UserCartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
