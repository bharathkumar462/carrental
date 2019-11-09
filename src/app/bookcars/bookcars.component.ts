import { Component, OnInit } from '@angular/core';
import { CarrentalserviceService } from '../carrentalservice.service';
import { CarsList } from '../carslist';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bookcars',
  templateUrl: './bookcars.component.html',
  styleUrls: ['./bookcars.component.css']
})
export class BookcarsComponent implements OnInit {
  urlimage:any[]=[];
  constructor(private getcarservice:CarrentalserviceService,private s1: DomSanitizer) { }
area;cars:CarsList[]=[];
  ngOnInit() {
    this.area=sessionStorage.getItem('area');
    this.getcarservice.getCars(this.area).subscribe(data=>{
      this.cars=data;
      for(let i=0;i<this.cars.length;i++){
      this.cars[i].image='data:image/jpeg;base64,'+this.cars[i].image;
      }
    });
  }

fetchimage(url:string)
{
return this.s1.bypassSecurityTrustUrl(url);
}

}
