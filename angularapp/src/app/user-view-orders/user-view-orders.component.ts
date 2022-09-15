import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderItem } from '../order-item';
import { ViewOrder } from '../view-order';

@Component({
  selector: 'app-user-view-orders',
  templateUrl: './user-view-orders.component.html',
  styleUrls: ['./user-view-orders.component.css']
})
export class UserViewOrdersComponent implements OnInit {
userId:any;
orderId:number;
amount:number;
cartitems:any[];
orderitems:OrderItem[];
viewOrder:ViewOrder[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
this.userId=sessionStorage.getItem('userId');
    this.cartService.viewOrder(this.userId).subscribe(
      (data: any) => {
       // console.log(data);
     //  this.cartitems=data;
      // this.cartitems.forEach(element => {
        //this.viewOrder=data;
this.orderitems=data;
        console.log(this.orderitems);
    //  });
     //   data.
      // console.log(this.cartitems);
       
        //this.toast.success('Item added to cart','Success');
       // alert('Item added to cart');
      },
      (error: any) => console.error(error) //this.toast.error('Please try again later','Something wrong')
    );

 //   this.cartitems.forEach(element => {
      //this.orderId=element.orderId;
   //   console.log(element);
   // });
  
}

}
