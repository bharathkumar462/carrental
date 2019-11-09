import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrentalserviceService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http:HttpClient) { }
  createCustomer(customer:object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+ `customers/create`,customer);
  }
 
  checkCustomer(customer:object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ `customers/authenticate`,customer);
  }
  forgotPassword(customer:object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ `customers/forgotpassword`,customer);
  }
  updatePassword(customer:object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ `customers/updatepassword`,customer);
  }
  addCars(cars:object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+ `cars/add`,cars);
  }
  getCars(area:string): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ `cars/getbyavailability`,area);
  }

  postimage(data:any):Observable<any>
{

  return this.http.post(this.baseUrl+'/insertimage',data);
}

getimage(data:any):Observable<any>
{

  return this.http.get(`${this.baseUrl}/getimage/${data}`);
}

}
