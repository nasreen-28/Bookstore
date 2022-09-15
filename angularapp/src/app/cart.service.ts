import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from './cartitem';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  addItemToCart(cart: CartItem): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/user/addToCart`, cart);
  }

  getUserCart(userId: String): Observable<Object> {
    return this.http.get(`${this.apiServerUrl}/user/getUserCart/${userId}`);
  }

  deleteCartItem(bookId: number,userId:any): Observable<Object> {
    return this.http.delete(`${this.apiServerUrl}/user/deleteCartItem/${bookId}/${userId}`);
  }

  placeOrder(order: Order): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/user/placeOrder`, order);
  }

  viewOrder(userId:any):Observable<Object>{
    return this.http.get(`${this.apiServerUrl}/user/viewOrders/${userId}`);
  }
}
