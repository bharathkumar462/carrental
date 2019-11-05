import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';






@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
 
  customerform = new FormGroup({
    username: new FormControl('',Validators.required),
    phonenumber: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required),
    admin: new FormControl('',Validators.required)
  });

  ngOnInit() {  }
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
