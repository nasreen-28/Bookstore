import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from '../address';
import { ContactService } from '../contact.service';
import { Contact } from './customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  customer:Contact=new Contact();
  address:Address=new Address();
  userId:any;
  constructor(private contactService:ContactService,private toast:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.userId= sessionStorage.getItem('userId');
    this.getContact();
    this.getAddress();
    
  }
  getAddress() {
    this.contactService.getAddress(this.userId).subscribe(
      (data: any) => {
        console.log(data);
       // this.toast.success('Item added to cart','Success');
       // alert('Item added to cart');
       if(data!=null){
       this.address=data;}
      },
      (error: any) => this.toast.error('Please try again later','Something wrong')
    );
  }
  getContact() {
    this.contactService.getContact(this.userId).subscribe(
      (data: any) => {
        console.log(data);
        if(data==null)
        {
          this.toast.warning('Please update your profile','Warning');
        }
        else{this.customer=data;}
        
       // this.toast.success('Item added to cart','Success');
       // alert('Item added to cart');
      },
      (error: any) => console.error(error)//this.toast.error('Please try again later','Something wrong')
    );
  }
onSubmit(){
  
  this.saveContact();
  this.saveAddress();

}
  saveAddress() {
    this.contactService.saveAddress(this.address,this.userId).subscribe(
      (data: any) => {
        console.log(data);
        this.toast.success('Profile updated!','Success');
        this.router.navigate(['/user/home']);
       // alert('Item added to cart');
      },
      (error: any) => console.error(error)//this.toast.error('Please try again later','Something wrong')
    );
    
  }
  saveContact() {
    this.contactService.saveContact(this.customer,this.userId).subscribe(
      (data: any) => {
        console.log(data);
       // this.toast.success('Item added to cart','Success');
       // alert('Item added to cart');
      },
      (error: any) => console.error(error)//this.toast.error('Please try again later','Something wrong')
    );
  }
}
