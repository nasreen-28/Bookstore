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
  bookTitle:any;
  p:number=1;
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getUserBooks();
  }
  search(){
    if(this.bookTitle==""){
      this.ngOnInit();
    }
    else{
      this.books=this.books.filter(res=>{
        return res.bookTitle.toLocaleLowerCase().includes
        (this.bookTitle.toLocaleLowerCase());
      });
    }
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
