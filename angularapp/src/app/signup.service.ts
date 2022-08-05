import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Signup } from './signup';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

 createUser(user:Signup):Observable<Object>{
  return this.http.post(`${this.apiServerUrl}/signup`,user);
 }
}
