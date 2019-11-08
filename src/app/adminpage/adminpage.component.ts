import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrentalserviceService } from '../carrentalservice.service';
import { CarsList } from '../carslist';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
 
carslist:CarsList=new CarsList();

  // carslistfrom = new FormGroup({
  //   availability: new FormControl('',Validators.required),
  //   carname: new FormControl('',Validators.required),
  //   price: new FormControl('',Validators.required)
  // });
save(){
  console.log(this.carslist);
this.addcarservice.addCars(this.carslist).subscribe(data=>console.log(data));
}
constructor(private addcarservice:CarrentalserviceService){}
  ngOnInit() {  this.carslist.bookstatus=false;console.log(this.carslist);}
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
