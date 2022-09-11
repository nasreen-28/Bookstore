
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Signup } from '../signup/signup';
import { SignupService } from '../signup/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:Signup=new Signup();
  constructor(private signupService:SignupService,private router:Router,private toast:ToastrService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.user);
    this.login();
  }
  login() {
    this.signupService.login(this.user).subscribe(
      (data: any) => {
        console.log(data);
        if(data.roles[0]=="ROLE_USER")
        {
          sessionStorage.setItem('userName',data.username);
          sessionStorage.setItem('userId',data.id);
          this.router.navigate(['/user/home']);
        }
        else if(data.roles[0]=="ROLE_ADMIN")
        {
          //console.log(data);
          sessionStorage.setItem('adminName',data.username);
          this.router.navigate(['/admin/home']);
        }

      },
      (error: any) => this.invalid()
    );
  }
  invalid(): void {
    this.toast.error('Invalid credentials','Failure');
  //  success('Registration success','Success');
  }


}
