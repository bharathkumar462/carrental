import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrentalserviceService } from '../carrentalservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from '../logout/logout.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarsList } from '../model/carslist';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  urlimage;
  carnoplate;
  fileimage: any = File;
  carslist: CarsList = new CarsList();
  admin;
  triplist;
  display = true;
  dataSource;
  status = false;
  errormsg:string;
  displayedColumns: string[] = ['numberplate', 'bookeddate', 'bookedtime', 'customername', 'bookstatus']

  // formgroup 
  carslistfrom = new FormGroup({
    availability: new FormControl('', Validators.required),
    carname: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    numberplate: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.admin = JSON.parse(sessionStorage.getItem('customer'));
    this.admin.image = 'data:image/jpeg;base64,' + this.admin.image;
    this.carslistfrom.controls['phonenumber'].setValue(this.admin.phonenumber);
    this.carslistfrom.controls['username'].setValue(this.admin.username);
  }

  constructor(private cars: MatSnackBar, private addcarservice: CarrentalserviceService, private s1: DomSanitizer, private modalService: NgbModal) { }

  // image insert and display function
  image(value) {
    const file = value.target.files[0];
    const fsize = file.size;
    const filesize = Math.round((fsize / 1024));
    if (filesize > 2048) {
      console.log(filesize);
      alert("File too Big, please select a file less than 2mb");
    }
    else
      this.fileimage = file;
  }

  fetchimage(url: string) {
    return this.s1.bypassSecurityTrustUrl(url);
  }


  // adding new car
  open(content) {
    this.modalService.open(content, { size: 'lg', scrollable: true });
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
      this.errormsg=error.error;
      if (error.status === 400) { }
    });

  }

  caradded() {
    this.cars.open("cars added", "enjoy", { duration: 2 * 1000 });
  }


  // admin section
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

  tripclose(bookedcar: any) {
    bookedcar.status = false;
    this.addcarservice.closetrip(bookedcar, bookedcar.numberplate).subscribe(data => {
      this.addcarservice.gettriplist(bookedcar.numberplate).subscribe(data => {
        this.triplist = data;
        this.dataSource = data;
      })
    });
  }

  homepage() {
    this.status = !this.status;
  }
  logout() {
    this.modalService.open(LogoutComponent);
  }
}
