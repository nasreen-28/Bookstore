import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Signup } from './signup';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: Signup = new Signup();

  constructor(
    private signupService: SignupService,
    private router: Router,
    private toast: ToastrService
  ) {}

  onSubmit() {
    this.saveUser();

    console.log(this.user);
  }

  openSuccess() {
    this.toast.success('Registration success', 'Success');
  }
  saveUser() {
    this.signupService.createUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.openSuccess();
      },
      (error: any) => console.error(error)
    );
  }
}
