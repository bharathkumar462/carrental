import { Component, OnInit } from '@angular/core';
import { CarrentalserviceService } from '../carrentalservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CarsList } from '../model/carslist';
import { BookCars } from '../model/bookcars';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookcars',
  templateUrl: './bookcars.component.html',
  styleUrls: ['./bookcars.component.css']
})
export class BookcarsComponent implements OnInit {
  urlimage: any[] = [];
  details; cars: CarsList[] = [];

  constructor(private getcarservice: CarrentalserviceService, private sanitize: DomSanitizer,
    private router: Router, private car: MatSnackBar) { }

  ngOnInit() {
    this.details = JSON.parse(sessionStorage.getItem('data'));
    this.getcarservice.getCars(this.details.area).subscribe(data => {
      this.cars = data;
      for (let i = 0; i < this.cars.length; i++) {
        this.cars[i].image = 'data:image/jpeg;base64,' + this.cars[i].image;
      }
    });
  }

  save(carsinfo: any) {
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
    this.getcarservice.updatestatus(carsinfo).subscribe(data => { this.carBooked(); this.router.navigate(['pickuppoint']); });
    this.getcarservice.bookcars(bookcars).subscribe(data => { });
  }

  
  fetchimage(url: string) {
    return this.sanitize.bypassSecurityTrustUrl(url);
  }

  carBooked() {
    this.car.open("Successfully Booked", "enjoy the ride", { duration: 2 * 1000 });
  }
}
