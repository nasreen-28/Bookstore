
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../contact.service';
import { Signup } from '../signup/signup';
import { SignupService } from '../signup/signup.service';
import { UserNavComponent } from '../user-nav/user-nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
user:Signup=new Signup();
userId:any;
  constructor(private signupService:SignupService,private router:Router,private toast:ToastrService,private contactService:ContactService) {
   // super();
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
          this.getAddress();
          
          //super.isUserAuthenticated=true;
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

  getAddress() {
    this.userId=sessionStorage.getItem('userId')
    this.contactService.getAddress(this.userId).subscribe(
      (data: any) => {
        console.log(data);
       // this.toast.success('Item added to cart','Success');
       // alert('Item added to cart');
       if(data!=null){
        this.router.navigate(['/user/home']);}
        else{
          this.router.navigate(['/user/profile']);
          
        }
      },
      (error: any) => this.toast.error('Please try again later','Something wrong')
    );
  }


}
