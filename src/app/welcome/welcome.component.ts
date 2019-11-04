import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name:string="unknown";
  constructor(private modalService: NgbModal) {}
  open() {
    this.modalService.open(LoginComponent);
  }
  open1() {
    this.modalService.open(RegisterComponent);
  }

  ngOnInit() { }

}
