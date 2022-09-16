import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../_services/cart.service';
import { OrderItem } from '../_classes/order-item';

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
        if(this.orderitems.length==0){
          this.toast.error('You have no orders yet', 'Failure')
        }
      },
      (error: any) =>  this.toast.error('Please try again later','Something wrong')
    );
  }
}
