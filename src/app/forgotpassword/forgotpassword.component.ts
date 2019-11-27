import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrentalserviceService } from '../carrentalservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  status: boolean = false;
  newstatus: boolean = false;
  otp: number;
  hide = true;
  authenticatemsg: string;
  otpstatus: boolean = false;
  customerform = new FormGroup({
    username: new FormControl('', Validators.required),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$')]),
    repassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$'), this.compareValidator('password')]),
    admin: new FormControl('', Validators.required)
  });

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private frgtservice: CarrentalserviceService) { }

  ngOnInit() { }

  check() {
    this.frgtservice.forgotPassword(this.customerform.value).subscribe(data => {
      this.otpstatus = data;
      this.status = data;
    }, error => {
      if (error.status === 404) {
        this.authenticatemsg = error.error;
      }
    });
  }
  checkotp() {
    this.frgtservice.otpverify(this.otp).subscribe(data => {
      this.newstatus = data;
      if (data) { this.otpstatus = false; }
    });
  }
  onSubmit() {
    this.frgtservice.updatePassword(this.customerform.value).subscribe(data => console.log(data), error => console.log(error));
    this.activeModal.close();
  }

  compareValidator(toCompare: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      if ((c.value === null) || (c.value.length === 0)) {
        return null;
      }
      const password = c.root.get(toCompare);

      if (password) {

        console.log(c.root.get(toCompare));
        const subscription: Subscription = password.valueChanges.subscribe(() => {
          c.updateValueAndValidity();
          subscription.unsubscribe();
        });
      }
      return password && password.value !== c.value ? { 'compare': true } : null;
    }
  }
}
