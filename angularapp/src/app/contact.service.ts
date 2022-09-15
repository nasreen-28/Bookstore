import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from './address';
import { Contact } from './user-profile/customer';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}


  

  saveContact(contact:Contact,userId:any): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/user/addContact/${userId}`,contact);
  }

  
  saveAddress(address:Address,userId:any): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/user/addAddress/${userId}`,address);
  }

  getContact(userId:any): Observable<Object> {
    return this.http.get(`${this.apiServerUrl}/user/getContact/${userId}`);
  }

  getAddress(userId:any): Observable<Object> {
    return this.http.get(`${this.apiServerUrl}/user/getAddress/${userId}`);
  }
}
