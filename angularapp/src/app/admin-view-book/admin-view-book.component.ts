import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admin-view-book',
  templateUrl: './admin-view-book.component.html',
  styleUrls: ['./admin-view-book.component.css'],
})
export class AdminViewBookComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.bookService.getBooks().subscribe(
      (data: any) => {
        this.books = data;
      },
      (error: any) => console.error(error)
    );
  }

  deleteBook(bookId:number){
    this.bookService.deleteBook(bookId).subscribe(
      (data: any) => {
       console.log("deleted");
       window.location.reload();

      },
      (error: any) => console.error(error)
    );
  }
}
