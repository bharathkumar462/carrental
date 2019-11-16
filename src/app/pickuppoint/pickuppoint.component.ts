import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrentalserviceService } from '../carrentalservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BookCars } from '../bookcars';
import { MatTableDataSource } from '@angular/material/table';
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
  model;triplist:BookCars[]=[];
  dataSource;
  displayedColumns: string[]=['numberplate','bookeddate','bookedtime','carname','bookstatus']
  status:boolean=false;
  fromDate: NgbDate;
  toDate: NgbDate; hoveredDate: NgbDate;
  time = { hour: 13, minute: 30 };
  meridian = true;
  customer;
  reverseValue() {
    this.progressvalue = (this.progressvalue) - 25;
  }
  progressValue() {
    this.progressvalue = (this.progressvalue) + 25;
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }
  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('customer'));
    this.customer.image = 'data:image/jpeg;base64,' + this.customer.image;
  }

  constructor(calendar: NgbCalendar, private s1: DomSanitizer, private mytripservice:CarrentalserviceService,private route: Router, private modalService: NgbModal) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

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
    console.log(data);
    sessionStorage.setItem('data', JSON.stringify(data));
    this.route.navigate(['bookcars']);
  }
  open(content) {
    this.modalService.open(content);
  }

  changecoords(a, b) {
    this.lat = a;
    this.lng = b;
  }

  fetchimage(url: string) {
    return this.s1.bypassSecurityTrustUrl(url);
  }
  getcarno(){
this.status=!this.status;
this.mytripservice.mytriplist(this.customer.phonenumber).subscribe(data=>{
  this.triplist = data;
  this.dataSource=this.triplist;
})
  }
}

