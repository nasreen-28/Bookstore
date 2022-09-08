import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-user-view-book',
  templateUrl: './user-view-book.component.html',
  styleUrls: ['./user-view-book.component.css']
})
export class UserViewBookComponent implements OnInit {

  bookId:number;
  book : Book = new Book();
  constructor(private route:ActivatedRoute,private bookService:BookService) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.bookId = paramsId['id'];
      console.log(this.bookId);
      this.getBookById(this.bookId);
    });
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

  addtocart(){
    
  }

}
