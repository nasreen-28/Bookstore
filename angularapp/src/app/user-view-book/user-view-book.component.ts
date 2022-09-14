import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CartItem } from '../cartitem';
import { CartService } from '../cart.service';
import { Signup } from '../signup/signup';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-view-book',
  templateUrl: './user-view-book.component.html',
  styleUrls: ['./user-view-book.component.css'],
})
export class UserViewBookComponent implements OnInit {
  bookId: number;
  book: Book = new Book();
  userId: String;
  quantity: number;
  cart: CartItem = new CartItem();
  snippets:String[];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private toast:ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      this.bookId = paramsId['id'];
      console.log(this.bookId);
      this.getBookById(this.bookId);
    });
    this.quantity = 1;

   // this.snippets=["Hello","hi","How","Are","you"];
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

  minus() {
    if (this.quantity >= 2) this.quantity--;
  }
  plus() {
    if (this.quantity <= 9) this.quantity++;
  }
  async addtocart() {
    this.cart.bookId = this.bookId;
    //this.userId=sessionStorage.getItem('userId');

    this.cart.userId = sessionStorage.getItem('userId');
    //console.log(this.cart.userId);
    this.cart.quantity = this.quantity;
    // console.log(this.cart);

    if (this.cart.userId == null) {
      this.toast.error('You must login to continue','Failure',{
        positionClass: 'toast-top-right' 
     })
     // await sleep(2000);
     // this.router.navigate(['/login'])
      //alert('You must login to continue');
    } else {
      this.cartService.addItemToCart(this.cart).subscribe(
        (data: any) => {
          console.log(data);
          this.toast.success('Item added to cart','Success');
         // alert('Item added to cart');
        },
        (error: any) => this.toast.error('Please try again later','Something wrong')
      );
    }
  }

  
}
function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}




