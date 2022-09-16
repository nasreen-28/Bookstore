import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../_services/cart.service';
import { OrderItem } from '../_classes/order-item';

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
        if(this.orderitems.length==0){
          this.toast.error('You have no orders yet', 'Failure')
        }
        console.log(this.orderitems);
      },
      (error: any) => this.toast.error('Please try again later','Something wrong')
    );
  }
}
