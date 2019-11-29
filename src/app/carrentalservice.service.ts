import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrentalserviceService {
  
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
  newCar(cars: object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `cars`, cars);
  }
  getCars(area: string): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `cars/availability`, area);
  }

  bookcars(carinfo: any): Observable<any> {

    return this.http.post(this.baseUrl + "book-cars", carinfo);
  }
  bookedcars(bookedcar: any): Observable<any> {
    return this.http.post(this.baseUrl + "admin/cars-list", bookedcar);
  }
  updatestatus(cars: any): Observable<any> {

    return this.http.post(this.baseUrl + "cars/status", cars);
  }
  gettriplist(numberplate: any): Observable<any> {

    return this.http.post(this.baseUrl + "admin/trip-lists", numberplate);
  }
  otpverify(otp: number): Observable<any> {
    return this.http.get(`${this.baseUrl}customers/${otp}`);
  }
  mytriplist(mytrip: any): Observable<any> {
    return this.http.post(this.baseUrl + "customers/trip-lists", mytrip);
  }

  closetrip(carinfo:any,numberplate:any):Observable<any>{
    return this.http.put(this.baseUrl+`cars/${numberplate}`,carinfo);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('customer') !== null;
  }

  isAdmin(): boolean {
    if (sessionStorage.getItem('customer') !== null) {
      let data = JSON.parse(sessionStorage.getItem('customer'))
      if (data.admin) { return true; }
    }
  }

}
