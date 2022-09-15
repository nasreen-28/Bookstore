import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { OrderItem } from '../order-item';
import { ViewOrder } from '../view-order';

@Component({
  selector: 'app-user-view-orders',
  templateUrl: './user-view-orders.component.html',
  styleUrls: ['./user-view-orders.component.css'],
})
export class UserViewOrdersComponent implements OnInit {
  userId: any;
  orderitems: OrderItem[];

  constructor(private cartService: CartService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.cartService.viewOrder(this.userId).subscribe(
      (data: any) => {
        this.orderitems = data;
        console.log(this.orderitems);
      },
      (error: any) => this.toast.error('You have no orders yet', 'Failure') //this.toast.error('Please try again later','Something wrong')
    );
  }
}
