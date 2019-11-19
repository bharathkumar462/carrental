import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { RegisterComponent } from '../register/register.component';
import { CarrentalserviceService } from '../carrentalservice.service';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AdminpageComponent } from '../adminpage/adminpage.component';
import { error } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  customer: any;
  authenticatemsg: string;
  customerform = new FormGroup({
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$')])

  });

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,
    private lgnservice: CarrentalserviceService, private route: Router, private naming: AdminpageComponent) { }

  ngOnInit() { }

  open() {
    this.modalService.open(ForgotpasswordComponent);
    this.activeModal.close();
  }


  check() {
    this.lgnservice.checkCustomer(this.customerform.value).subscribe(data => {
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
    }, error => {
      if (error.status === 404) {
        this.authenticatemsg = error.error;
        console.log(error);
      }
    });
  }

}
