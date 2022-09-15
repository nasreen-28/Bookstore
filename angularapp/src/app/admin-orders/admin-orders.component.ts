import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orderitems:OrderItem[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.viewAllOrders().subscribe(
      (data: any) => {
        this.orderitems = data;
        console.log(this.orderitems);
      },
      (error: any) =>console.error(error) //this.toast.error('You have no orders yet', 'Failure') //this.toast.error('Please try again later','Something wrong')
    );
  }

}
