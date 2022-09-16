import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../_services/cart.service';
import { ContactService } from '../_services/contact.service';
import { Order } from '../_classes/order';
import { UserCart } from '../_classes/user-cart';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent implements OnInit {
  order: Order = new Order();
  quantity: any;
  subtotal: number = 0;
  shipping: number = 0;
  cartitems: UserCart[];
  userId: any;
  total: number;
  cartlength: number = 0;

  constructor(
    private cartService: CartService,
    private toast: ToastrService,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.getUserCart();
  }

  plus() {
    throw new Error('Method not implemented.');
  }

  minus() {
    throw new Error('Method not implemented.');
  }

  getUserCart() {
    this.userId = sessionStorage.getItem('userId');
    this.cartService.getUserCart(this.userId).subscribe(
      (data: any) => {
        this.cartitems = data;
        console.log(this.cartitems);
        this.cartitems.forEach((element) => {
          this.subtotal += element.bookPrice;
        });

        this.shipping = this.randomInt(30, 50);
        this.total = this.subtotal + this.shipping;
        this.cartlength = this.cartitems.length;
        if (this.cartitems.length == 0) {
          this.toast.error('Your cart is empty', 'Failure');
        }
      },
      (error: any) => console.error(error)
    );
  }

  placeorder() {
    console.log('Order');
    this.router.navigate(['/user/placeOrder']);
    this.order.amount = this.total;
    this.order.cartItem = this.cartitems;
    this.order.userId = this.userId;
    console.log(this.order);
    this.cartService.placeOrder(this.order).subscribe(
      (data: any) => {
        //this.books = data;
        console.log(data);
        sessionStorage.setItem('orderId', data.orderId);
        sessionStorage.setItem('orderDate', data.createdDate);
        sessionStorage.setItem('noOfItems', data.cartItem.length);
        sessionStorage.setItem('totalAmount', data.amount);
        console.log(sessionStorage);
      },
      (error: any) => console.error(error)
    );
  }
  getAddress() {
    this.contactService.getAddress(this.userId).subscribe((data: any) => {
      console.log(data);
      // this.toast.success('Item added to cart','Success');
      // alert('Item added to cart');
      if (data == null) {
        this.toast.warning('Please update your profile', 'Wanring');
      }
      (error: any) =>
        this.toast.error('Please try again later', 'Something wrong');
    });
  }
  deleteCartItem(bookId: number) {
    this.cartService.deleteCartItem(bookId, this.userId).subscribe(
      (data: any) => {
        console.log(data);
        window.location.reload();
      },
      (error: any) => console.error(error)
    );
  }

  randomInt(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
