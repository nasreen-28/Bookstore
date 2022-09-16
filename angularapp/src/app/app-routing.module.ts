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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { UserViewOrdersComponent } from './user-view-orders/user-view-orders.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/addBook', component: AdminAddBookComponent },
  { path: 'admin/viewBook', component: AdminViewBookComponent },
  { path: 'admin/editBook/:id', component: AdminEditBookComponent },
  { path: 'user/home', component: UserHomeComponent },
  { path: 'user/viewBook/:id', component: UserViewBookComponent },
  { path: 'user/profile', component: UserProfileComponent },
  { path: 'user/cart', component: UserCartComponent },
  { path: 'user/placeOrder', component: OrderPlacedComponent },
  { path: 'user/viewOrders', component: UserViewOrdersComponent },
  { path: 'admin/viewOrders', component: AdminOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
