import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customerform = new FormGroup({
    
    phoneNumber: new FormControl('',Validators.required),
    passWord: new FormControl('',Validators.required)
   
  });
 
  constructor(public activeModal: NgbActiveModal){}

  ngOnInit() {
    

}
}
