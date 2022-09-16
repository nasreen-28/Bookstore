import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../_classes/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  addBook(book: Book): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/admin/addBook`, book);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}/admin/viewBooks`);
  }

  getUserBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}/user/viewBooks`);
  }

  getBookById(bookId: number) {
    return this.http.get<Book>(
      `${this.apiServerUrl}/admin/getBookById/${bookId}`
    );
  }

  updateBook(book: Book, bookId: number): Observable<Object> {
    return this.http.put(`${this.apiServerUrl}/admin/editBook/${bookId}`, book);
  }

  deleteBook(bookId: number) {
    return this.http.delete(`${this.apiServerUrl}/admin/deleteBook/${bookId}`);
  }
}
