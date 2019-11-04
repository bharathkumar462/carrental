import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrentalserviceService } from '../carrentalservice.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  status:boolean=false;
 
  customerform = new FormGroup({
    username: new FormControl('',Validators.required),
    phonenumber: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required),
    admin: new FormControl('',Validators.required)
  });
  constructor(private activeModal: NgbActiveModal,private modalService: NgbModal,private frgtservice:CarrentalserviceService) { }

  ngOnInit() {}
  check(){
this.frgtservice.forgotPassword(this.customerform.value).subscribe(data => this.status=data);
  }
  onSubmit(){
    this.frgtservice.updatePassword(this.customerform.value).subscribe(data => console.log(data), error => console.log(error));
    this.activeModal.close();
    this.modalService.open(LoginComponent);
  }
}
