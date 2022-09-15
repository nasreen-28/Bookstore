import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  orderId: any;
  orderDate: any;
  items: any;
  amount: any;
  //public sessionStorage: any;
  constructor() {}

  ngOnInit(): void {
   // this.orderId = sessionStorage.getItem('orderId');
    //this.orderDate = sessionStorage.getItem('orderDate');
    //this.items = sessionStorage.getItem('noOfItems');
    //this.amount = sessionStorage.getItem('totalAmount');
   // this.reload();
    console.log(this.orderId)
  }
getOrderId():any{
return sessionStorage.getItem('orderId');
}
  
getOrderDate():any{
  return sessionStorage.getItem('orderDate');
  }

  getItems():any{
    return sessionStorage.getItem('noOfItems');
    }
    getAmount():any{
      return sessionStorage.getItem('totalAmount');
      }
}
