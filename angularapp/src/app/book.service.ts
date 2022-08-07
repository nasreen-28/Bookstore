import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  addBook(book:Book):Observable<Object>{
    return this.http.post(`${this.apiServerUrl}/admin/addBook`,book);
   }
}
