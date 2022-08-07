import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component';
import { AdminViewBookComponent } from './admin-view-book/admin-view-book.component';
import { AdminEditBookComponent } from './admin-edit-book/admin-edit-book.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserViewBookComponent } from './user-view-book/user-view-book.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
   { path: 'signup', component: SignupComponent },
   {path:'login',component:LoginComponent},
   {path:'admin/home',component:AdminHomeComponent},
   {path:'admin/addBook',component:AdminAddBookComponent},
   {path:'admin/viewBook',component:AdminViewBookComponent},
   {path:'admin/editBook',component:AdminEditBookComponent},
   {path:'user/home',component:UserHomeComponent},
   {path:'user/viewBook',component:UserViewBookComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
