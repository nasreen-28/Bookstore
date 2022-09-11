import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CartItem } from '../cartitem';
import { CartService } from '../cart.service';
import { Signup } from '../signup/signup';

@Component({
  selector: 'app-user-view-book',
  templateUrl: './user-view-book.component.html',
  styleUrls: ['./user-view-book.component.css']
})
export class UserViewBookComponent implements OnInit {

  bookId:number;
  book : Book = new Book();
userId:String;
  quantity:number;
  cart:CartItem=new CartItem();
  constructor(private route:ActivatedRoute,private bookService:BookService,private cartService:CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.bookId = paramsId['id'];
      console.log(this.bookId);
      this.getBookById(this.bookId);
    });
    this.quantity=1
  }

  getBookById(bookId: number) {
    this.bookService.getBookById(bookId).subscribe(
      (data: any) => {
        console.log(data);
        this.book = data;
      },
      (error: any) => console.error(error)
    );
  }

  minus()
  {
    if(this.quantity>=2)
      this.quantity--;
  }
  plus()
  {
    if(this.quantity<=9)
    this.quantity++;
  }
  addtocart(){
 this.cart.bookId=this.bookId;
//this.userId=sessionStorage.getItem('userId');
 this.cart.userId=sessionStorage.getItem('userId') ;
 this.cart.quantity=this.quantity;
// console.log(this.cart);

 this.cartService.addItemToCart(this.cart).subscribe(
  (data: any) => {
    console.log(data);
    alert("Item added to cart");
    
  },
  (error: any) => console.error(error)
);

    
  }

}
