import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import {ViewChild,ElementRef,Renderer2} from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name:string="unknown";
  constructor(private modalService: NgbModal) {}
 
  open() {
    this.modalService.open(LoginComponent,{size:'sm',scrollable:true});
  }
  open1() {
    this.modalService.open(RegisterComponent,{size:'lg',scrollable:true});
  }

  ngOnInit() { sessionStorage.clear();}

}
