import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  name:string=sessionStorage.getItem('customername');
  constructor() { }

  ngOnInit() {
  }

}
