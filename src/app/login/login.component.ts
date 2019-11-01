import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { RegisterComponent } from '../register/register.component';
import { CarrentalserviceService } from '../carrentalservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status:boolean=false;
  customerform = new FormGroup({
    phonenumber: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
   
  });
 
  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal,private lgnservice:CarrentalserviceService){}
  open() {
    this.modalService.open(ForgotpasswordComponent);
    this.activeModal.close();
  }
  ngOnInit() {}
    
  check(){
      this.lgnservice.checkCustomer(this.customerform.value).subscribe(data => this.status=data, error => console.log(error));
    }

}
