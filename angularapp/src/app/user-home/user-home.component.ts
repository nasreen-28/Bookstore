import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getUserBooks();
  }
  getUserBooks() {
    this.bookService.getUserBooks().subscribe(
      (data: any) => {
        this.books = data;
      },
      (error: any) => console.error(error)
    );

  }


}
