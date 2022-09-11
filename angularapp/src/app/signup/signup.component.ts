import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Signup } from './signup';
import { SignupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Signup = new Signup();

  constructor(private signupService : SignupService, private router:Router, private toast:ToastrService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(this.user);
    this.saveUser();
   
    console.log(this.user);
    //alert("Registration successful");
    //this.router.navigate(['login']);
    
  }

  openSuccess(){
    this.toast.success('Registration success','Success');
    }
  saveUser(){
    this.signupService.createUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.openSuccess();
      },
      (error: any) => console.error(error)
    );
  }
}
