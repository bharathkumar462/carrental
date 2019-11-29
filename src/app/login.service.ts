import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  createCustomer(customer: object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `customers`, customer);
  }
  checkCustomer(customer: object): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `customers/authenticate`, customer);
  }
  forgotPassword(customer: object): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `customers/re-authenticate`, customer);
  }
  updatePassword(customer: object): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `customers/password`, customer);
  }

  otpverify(otp: number): Observable<any> {
    return this.http.get(`${this.baseUrl}customers/${otp}`);
  }
  
}
