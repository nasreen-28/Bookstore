import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css'],
})
export class AdminAddBookComponent {
  book: Book = new Book();

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit() {
    this.addBook(this.book);
    alert('Book added successfully');
  }

  addBook(newbook: Book) {
    this.bookService.addBook(newbook).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.error(error)
    );
    this.router.navigate(['/admin/viewBook']);
  }
}
