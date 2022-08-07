import { Component, OnInit } from '@angular/core';
import { Signup } from './signup';
import { SignupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Signup = new Signup();

  constructor(private signupService : SignupService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(this.user);
    this.saveUser();
  }

  saveUser(){
    this.signupService.createUser(this.user).subscribe( data=>{
      console.log(data);
    },
    error=>console.error(error));
  
  }
}
