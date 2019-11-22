import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrentalserviceService } from '../carrentalservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { LogoutComponent } from '../logout/logout.component';
import { BookCars } from '../model/bookcars';
import { CustomerDetails } from '../model/customerdetails';
@Component({
  selector: 'app-pickuppoint',
  templateUrl: './pickuppoint.component.html',
  styleUrls: ['./pickuppoint.component.css']
})
export class PickuppointComponent implements OnInit {

  progressvalue = 0;
  lat = 43.879078;
  lng = -103.4615581;
  area: string;
  triplist: BookCars[] = [];
  dataSource: MatTableDataSource<BookCars>;
  displayedColumns: string[] = ['numberplate', 'bookeddate', 'bookedtime', 'carname', 'bookstatus'];
  status = false;
  fromDate: NgbDate;
  toDate: NgbDate; hoveredDate: NgbDate;
  time = { hour: 13, minute: 30 };
  meridian = true;
  customer:CustomerDetails;

  constructor(calendar: NgbCalendar, private sanitize: DomSanitizer,
     private mytripservice: CarrentalserviceService,private route: Router, private modalService: NgbModal) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('customer'));
    this.customer.image = 'data:image/jpeg;base64,' + this.customer.image;
  }

//googlemaps

  changecoords(a, b) {
    this.lat = a;
    this.lng = b;
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  onSubmit() {
    let pickupdate = this.fromDate['day'] + "/" + this.fromDate['month'] + "/" + this.fromDate['year'];
    let dropdate = this.toDate['day'] + "/" + this.toDate['month'] + "/" + this.toDate['year'];
    let bookedtime = this.time['hour'] + ":" + this.time['minute'];
    let data: any = {
      "pickupdate": pickupdate,
      "dropdate": dropdate,
      "bookedtime": bookedtime,
      "area": this.area
    }
    sessionStorage.setItem('data', JSON.stringify(data));
    this.route.navigate(['bookcars']);
  }
  
  fetchimage(url: string) {
    return this.sanitize.bypassSecurityTrustUrl(url);
  }
  getcarno() {
    this.status = !this.status;
    this.mytripservice.mytriplist(this.customer.phonenumber).subscribe(data => {
      this.triplist = data;
      this.dataSource = new MatTableDataSource(this.triplist);
    })
  }

  //datepicker

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }


  logout() {
    this.modalService.open(LogoutComponent);
  }
  reverseValue() {
    this.progressvalue = (this.progressvalue) - 25;
  }
  progressValue() {
    this.progressvalue = (this.progressvalue) + 25;
  }
  open(content) {
    this.modalService.open(content);
  }
  selectArea(area:string){
    this.area=area;
  }

}

