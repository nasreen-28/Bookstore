import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admin-edit-book',
  templateUrl: './admin-edit-book.component.html',
  styleUrls: ['./admin-edit-book.component.css']
})
export class AdminEditBookComponent implements OnInit {
  bookId: number;
  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.bookId = paramsId['id'];
    });
    this.getBookById(this.bookId);
  }

  getBookById(bookId: number) {
    this.bookService.getBookById(bookId).subscribe(
      (data: any) => {
        //console.log(data);
        this.book = data;
      },
      (error: any) => console.error(error)
    );
  }

  onSubmit() {
    this.updateBook(this.book, this.bookId);
  }

  updateBook(book: Book, bookId: number) {
    this.bookService.updateBook(this.book, this.bookId).subscribe(
      (data: any) => {
        this.router.navigate(['/admin/viewBook']);
      },
      (error: any) => console.error(error)
    );
  }

}
