import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrentalserviceService } from '../carrentalservice.service';
import { CarsList } from '../carslist';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  urlimage;
  fileimage: any = File;
  carslist: CarsList = new CarsList();

  carslistfrom = new FormGroup({
    availability: new FormControl('', Validators.required),
    carname: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });
  image(value) {
    const file = value.target.files[0];

    this.fileimage = file;

  }

  

  // getData() {

  //   this.s.getimage(this.form1.value.name).subscribe(data => {
  //     console.log(data);

  //     console.log(data.image)
  //     this.urlimage = 'data:image/jpeg;base64,' + data.image;
  //     console.log(this.urlimage);
  //   });

  // }

 
 
  save() {
    const data=this.carslistfrom.value;
    const formdata= new FormData();
    formdata.append("data",JSON.stringify(data));
    formdata.append('image',this.fileimage);
    console.log(this.carslistfrom.value);
    this.addcarservice.addCars(formdata).subscribe(data => console.log(data));
  }
  constructor(private addcarservice: CarrentalserviceService, private s1: DomSanitizer) { }
  ngOnInit() { this.carslist.bookstatus = false; console.log(this.carslistfrom.value); }
  // lat;
  // lng;
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //     });
  //   }
  // }

}
