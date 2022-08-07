import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css'],
})
export class AdminAddBookComponent implements OnInit {
  book: Book = new Book();
  constructor(private bookService: BookService) {}

  ngOnInit(): void {}
  onSubmit() {
    //console.log(this.book);
    this.addBook();
    alert("Book added successfully");
  }
  addBook() {
    this.bookService.addBook(this.book).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.error(error)
    );
  }
}
