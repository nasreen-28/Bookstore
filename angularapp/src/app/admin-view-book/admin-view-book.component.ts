import { Component, OnInit } from '@angular/core';
import { AdminAddBookComponent } from '../admin-add-book/admin-add-book.component';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admin-view-book',
  templateUrl: './admin-view-book.component.html',
  styleUrls: ['./admin-view-book.component.css']
})
export class AdminViewBookComponent implements OnInit {
 
  books : Book[]; 
  viewbook :Book;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  /*  this.books=[
      {
        bookTitle:"It ends with us",
        bookPrice:289,
        bookImageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503._UY500_SS500_.jpg"
      },
      {
        bookTitle:"It ends with us",
        bookPrice:289,
        bookImageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503._UY500_SS500_.jpg"
      },
      {
        bookTitle:"It ends with us",
        bookPrice:289,
        bookImageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503._UY500_SS500_.jpg"
      },
      {
        bookTitle:"It ends with us",
        bookPrice:289,
        bookImageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503._UY500_SS500_.jpg"
      },
      {
        bookTitle:"It ends with us",
        bookPrice:289,
        bookImageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503._UY500_SS500_.jpg"
      },
    ]*/
    this.getAllBooks();
  }
  getAllBooks()  {
   this.bookService.getBooks().subscribe(
      (data: any) => {
        //console.log(data);
        this.books=data;
      },
      (error: any) => console.error(error)
    );
    
  }


}
