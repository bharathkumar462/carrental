import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { RegisterComponent } from '../register/register.component';
import { CarrentalserviceService } from '../carrentalservice.service';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AdminpageComponent } from '../adminpage/adminpage.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  customer: any;

  customerform = new FormGroup({
    phonenumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,
    private lgnservice: CarrentalserviceService, private route: Router, private naming: AdminpageComponent) { }
  open() {
    this.modalService.open(ForgotpasswordComponent);
    this.activeModal.close();
  }
  ngOnInit() { }

  check() {
    this.lgnservice.checkCustomer(this.customerform.value).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.customer = data;
        console.log(this.customer);
        sessionStorage.setItem('customer', JSON.stringify(this.customer));
        if (this.customer.admin) {
          this.activeModal.close();
          this.route.navigate(['admin']);
        }
        else {
          this.activeModal.close();
          this.route.navigate(['pickuppoint']);
        }
      }
    });
  }

}
