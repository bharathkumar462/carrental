import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import {ViewChild,ElementRef,Renderer2} from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class WelcomeComponent implements OnInit {
name:string="unknown";
  constructor(private modalService: NgbModal,@Inject(DOCUMENT) document) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }
  open() {
    this.modalService.open(LoginComponent,{size:'lg',scrollable:true});
  }
  open1() {
    this.modalService.open(RegisterComponent,{size:'lg',scrollable:true});
  }

  ngOnInit() { sessionStorage.clear();}

}
