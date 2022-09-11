import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from './cartitem';

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
}
