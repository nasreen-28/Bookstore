import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserCart } from '../user-cart';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent implements OnInit {
  plus() {
    throw new Error('Method not implemented.');
  }
  quantity: any;
  minus() {
    throw new Error('Method not implemented.');
  }
  cartitems: UserCart[];
  userId: any;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getUserCart();
  }
  getUserCart() {
    this.userId = sessionStorage.getItem('userId');
    this.cartService.getUserCart(this.userId).subscribe(
      (data: any) => {
        // console.log(data);
        this.cartitems = data;
        console.log(this.cartitems);
      },
      (error: any) => console.error(error)
    );
  }
}
