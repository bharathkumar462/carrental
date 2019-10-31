import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerform = new FormGroup({
    userName: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    passWord: new FormControl('',Validators.required),
    repassWord: new FormControl('',Validators.required)
  });
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
