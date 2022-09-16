import { Component } from '@angular/core';
import { Book } from '../_classes/book';
import { BookService } from '../_services/book.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css'],
})
export class AdminAddBookComponent {
  book: Book = new Book();

  constructor(
    private bookService: BookService,
    private router: Router,
    private toast: ToastrService
  ) {}

  onSubmit() {
    this.addBook(this.book);
  }

  addBook(newbook: Book) {
    this.bookService.addBook(newbook).subscribe(
      (data: any) => {
        this.toast.success('Book added successfully', 'Success');
      },
      (error: any) =>
        this.toast.error('Please try again later', 'Something wrong')
    );
    this.router.navigate(['/admin/viewBook']);
  }
}
