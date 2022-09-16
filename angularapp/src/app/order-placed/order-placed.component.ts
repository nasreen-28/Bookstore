import { Component } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent {
  orderId: any;
  orderDate: any;
  items: any;
  amount: any;
  constructor() {}

  getOrderId(): any {
    return sessionStorage.getItem('orderId');
  }

  getOrderDate(): any {
    return sessionStorage.getItem('orderDate');
  }

  getItems(): any {
    return sessionStorage.getItem('noOfItems');
  }
  getAmount(): any {
    return sessionStorage.getItem('totalAmount');
  }
}
