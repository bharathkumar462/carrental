import { Component, OnInit } from '@angular/core';
import { CarrentalserviceService } from '../carrentalservice.service';
import { CarsList } from '../carslist';

@Component({
  selector: 'app-bookcars',
  templateUrl: './bookcars.component.html',
  styleUrls: ['./bookcars.component.css']
})
export class BookcarsComponent implements OnInit {

  constructor(private getcarservice:CarrentalserviceService) { }
area;cars:CarsList[];
  ngOnInit() {
    this.area=sessionStorage.getItem('area');
    this.getcarservice.getCars(this.area).subscribe(data=>{
      this.cars=data;
      console.log(this.cars);});
  }
}
