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
  constructor(private modalService: NgbModal,private renderer:Renderer2) {}
  @ViewChild('card',{static:false})card:ElementRef;
  onMouseMove(event) {
    let x = -(window.screen.width / 2 - event.screenX) / 10;
    let y = (window.screen.height / 2 - event.screenY) / 7;
    this.renderer.setStyle(this.card.nativeElement,'transform',`rotateY(${x}deg) rotateX(${y}deg)`);
  }
  open() {
    this.modalService.open(LoginComponent,{size:'sm',scrollable:true});
  }
  open1() {
    this.modalService.open(RegisterComponent,{size:'lg',scrollable:true});
  }

  ngOnInit() { }

}
