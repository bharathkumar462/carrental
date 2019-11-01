import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrentalserviceService {
  private baseUrl = 'http://localhost:8080/api/customers';
  constructor(private http:HttpClient) { }
  createCustomer(customer:object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+ `/create`,customer);
  }
 
  checkCustomer(customer:object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ `/authenticate`,customer);
  }
  forgotPassword(customer:object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ `/forgotpassword`,customer);
  }
  updatePassword(customer:object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ `/updatepassword`,customer);
  }
}
