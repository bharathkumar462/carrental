import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrentalserviceService } from '../carrentalservice.service';
import { CarsList } from '../carslist';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from '../logout/logout.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  urlimage; carnoplate;
  fileimage: any = File;
  carslist: CarsList = new CarsList();
  admin;
  triplist;
  display = true;
  dataSource;
  status = false;
  displayedColumns: string[] = ['numberplate', 'bookeddate', 'bookedtime', 'customername', 'bookstatus']
  carslistfrom = new FormGroup({
    availability: new FormControl('', Validators.required),
    carname: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    numberplate: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });

  image(value) {
    const file = value.target.files[0];
    this.fileimage = file;
  }

  fetchimage(url: string) {
    return this.s1.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.admin = JSON.parse(sessionStorage.getItem('customer'));
    this.admin.image = 'data:image/jpeg;base64,' + this.admin.image;
    this.carslistfrom.controls['phonenumber'].setValue(this.admin.phonenumber);
    this.carslistfrom.controls['username'].setValue(this.admin.username);
  }

  save(content) {

    const data = this.carslistfrom.value;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(data));
    formdata.append('image', this.fileimage);
    this.addcarservice.newCar(formdata).subscribe(data => {
      this.modalService.dismissAll(content);
      this.caradded();
    }, error => {
      console.log(error);
      if (error.status === 400) { }
    });

  }

  constructor(private cars: MatSnackBar, private addcarservice: CarrentalserviceService, private s1: DomSanitizer, private modalService: NgbModal) { }

  caradded() {
    this.cars.open("cars added", "enjoy", { duration: 2 * 1000 });
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', scrollable: true });
  }

  getcarno() {
    this.status = true;
    this.addcarservice.bookedcars(this.admin.phonenumber).subscribe(data => {
      this.carnoplate = data;
      console.log(data);
      console.log(this.carnoplate);
    })
  }

  gettriplist(data: any) {
    this.display = false;
    this.addcarservice.gettriplist(data.numberplate).subscribe(data => {
      this.triplist = data;
      this.dataSource = data;
    })
  }

  homepage() {
    this.status = !this.status;
  }
  logout() {
    this.modalService.open(LogoutComponent);
  }

  tripclose(bookedcar: any) {
    bookedcar.status = false;
    this.addcarservice.closetrip(bookedcar, bookedcar.numberplate).subscribe(data => {
      this.addcarservice.gettriplist(bookedcar.numberplate).subscribe(data => {
        this.triplist = data;
        this.dataSource = data;
      })
    });
  }

}
