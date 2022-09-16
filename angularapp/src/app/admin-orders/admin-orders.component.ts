import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  orderitems: OrderItem[];

  constructor(private cartService: CartService,private toast:ToastrService) {}

  ngOnInit(): void {
    this.cartService.viewAllOrders().subscribe(
      (data: any) => {
        this.orderitems = data;
        console.log(this.orderitems);
      },
      (error: any) => this.toast.error('You have no orders yet', 'Failure') //this.toast.error('Please try again later','Something wrong')
    );
  }
}
