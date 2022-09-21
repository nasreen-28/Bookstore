import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from './_services/signup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private signupService:SignupService,private route:Router){}

  canActivate():boolean{
    if(this.signupService.loggedIn()){
      return true;
    }
    else{
      this.route.navigate(['/login'])
      return false;
    }
  }
  
}
