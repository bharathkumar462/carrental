import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrentalserviceService } from '../carrentalservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerform = new FormGroup({
    username: new FormControl('',Validators.required),
    phonenumber: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required)
  });
  constructor(public activeModal: NgbActiveModal,private regservice:CarrentalserviceService,private modalService: NgbModal,private router:Router) { }

  ngOnInit() {
  }
save(){
this.regservice.createCustomer(this.customerform.value).subscribe(data => console.log(data), error => console.log(error));
this.activeModal.close();
this.modalService.open(LoginComponent);
}
}
