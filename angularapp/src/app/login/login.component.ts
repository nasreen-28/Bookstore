import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../signup/signup';
import { SignupService } from '../signup/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:Signup=new Signup();
  constructor(private signupService:SignupService,private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.user);
    this.login();
  }
  login() {
    this.signupService.login(this.user).subscribe(
      (data: any) => {
        console.log(data.roles[0]);
        if(data.roles[0]=="ROLE_USER")
        {
          this.router.navigate(['/user/home']);
        }
        else if(data.roles[0]=="ROLE_ADMIN")
        {
          this.router.navigate(['/admin/home']);
        }

      },
      (error: any) => console.error(error)
    );
  }


}
