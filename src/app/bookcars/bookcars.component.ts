import { Component, OnInit } from '@angular/core';
import { CarrentalserviceService } from '../carrentalservice.service';
import { CarsList } from '../carslist';
import { DomSanitizer } from '@angular/platform-browser';
import { BookCars } from '../bookcars';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcars',
  templateUrl: './bookcars.component.html',
  styleUrls: ['./bookcars.component.css']
})
export class BookcarsComponent implements OnInit {
  urlimage: any[] = [];
  constructor(private getcarservice: CarrentalserviceService, private s1: DomSanitizer, private router: Router) { }
  details; cars: CarsList[] = [];
  ngOnInit() {
    this.details = JSON.parse(sessionStorage.getItem('data'));
    console.log(this.details);
    this.getcarservice.getCars(this.details.area).subscribe(data => {
      this.cars = data;
      for (let i = 0; i < this.cars.length; i++) {
        this.cars[i].image = 'data:image/jpeg;base64,' + this.cars[i].image;
      }
    });
  }

  fetchimage(url: string) {
    return this.s1.bypassSecurityTrustUrl(url);
  }

  save(carsinfo: any) {
    console.log(carsinfo);
    let bookcars: BookCars = new BookCars();
    bookcars.numberplate = carsinfo.numberplate;
    let splitimage: string[] = carsinfo.image.split(",");
    bookcars.image = splitimage[1];
    bookcars.carname = carsinfo.carname;
    bookcars.bookstatus = !carsinfo.bookstatus;
    let customer = JSON.parse(sessionStorage.getItem('customer'));
    bookcars.phonenumber = customer.phonenumber;
    bookcars.username = customer.username;
    let bookinfo = JSON.parse(sessionStorage.getItem("data"));
    bookcars.bookedtime = bookinfo.bookedtime;
    bookcars.bookeddate = bookinfo.pickupdate;
    carsinfo.image = splitimage[1];
    this.getcarservice.updatestatus(carsinfo).subscribe(data => {this.router.navigate(['pickuppoint']);});
    this.getcarservice.bookcars(bookcars).subscribe(data =>{});
  }
}
