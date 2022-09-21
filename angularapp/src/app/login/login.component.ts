import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../_services/contact.service';
import { Signup } from '../_classes/signup';
import { SignupService } from '../_services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: Signup = new Signup();
  userId: any;
  constructor(
    private signupService: SignupService,
    private router: Router,
    private toast: ToastrService,
    private contactService: ContactService
  ) {}

  onSubmit() {
    this.login();
  }
  login() {
    this.signupService.login(this.user).subscribe(
      (data: any) => {
        console.log(data);
        if (data.roles[0] == 'ROLE_USER') {
          sessionStorage.setItem('userName', data.username);
          sessionStorage.setItem('userId', data.id);
          sessionStorage.setItem('token',data.accessToken);
          this.getAddress();
        } else if (data.roles[0] == 'ROLE_ADMIN') {
          sessionStorage.setItem('adminName', data.username);
          sessionStorage.setItem('Admin', 'ADMIN');
          sessionStorage.setItem('token',data.accessToken);
          this.router.navigate(['/admin/home']);
        }
      },
      (error: any) => this.invalid()
    );
  }
  invalid(): void {
    this.toast.error('Invalid credentials', 'Failure');
  }

  getAddress() {
    this.userId = sessionStorage.getItem('userId');
    this.contactService.getAddress(this.userId).subscribe(
      (data: any) => {
        console.log(data);
        if (data != null) {
          this.router.navigate(['/user/home']);
        } else {
          this.router.navigate(['/user/profile']);
        }
      },
      (error: any) =>
        this.toast.error('Please try again later', 'Something wrong')
    );
  }
}
