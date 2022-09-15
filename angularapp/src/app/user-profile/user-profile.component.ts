import { Component, OnInit } from '@angular/core';
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
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.userId= sessionStorage.getItem('userId');
  this.saveContact();
  this.saveAddress();

}
  saveAddress() {
    this.contactService.saveAddress(this.address,this.userId).subscribe(
      (data: any) => {
        console.log(data);
       // this.toast.success('Item added to cart','Success');
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
