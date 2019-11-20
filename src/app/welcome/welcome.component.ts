import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';



@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {  }

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
    this.modalService.open(LoginComponent, { size: 'lg', scrollable: true });
  }

  open1() {
    this.modalService.open(RegisterComponent, { size: 'lg', scrollable: true });
  }

}
