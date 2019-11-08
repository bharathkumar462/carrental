import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrentalserviceService } from '../carrentalservice.service';
@Component({
  selector: 'app-pickuppoint',
  templateUrl: './pickuppoint.component.html',
  styleUrls: ['./pickuppoint.component.css']
})
export class PickuppointComponent implements OnInit {

  lat;
  lng;
  area: string;
  model;
  
  ngOnInit() { }
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  time = new FormControl('');
  constructor(calendar: NgbCalendar,private route:Router) {
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
  onSubmit(){
    sessionStorage.setItem('area',this.area);
this.route.navigate(['bookcars']);
console.log(this.area);
  }
}

