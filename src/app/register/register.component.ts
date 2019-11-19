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
    username: new FormControl('', Validators.required),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$')]),
    repassword: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+.[a-z]{2,4}$")]),
    admin: new FormControl('', Validators.required)
  });
  fileimage: any = File;
  role;
  photo: string;
  hide = true;

  constructor(public activeModal: NgbActiveModal, private regservice: CarrentalserviceService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() { }

  save() {
    const data = this.customerform.value;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(data));
    formdata.append('image', this.fileimage);
    this.regservice.createCustomer(formdata).subscribe(data => console.log(data), error => console.log(error));
    this.activeModal.close();
    this.modalService.open(LoginComponent);
  }

  image(value) {
    const file = value.target.files[0];
    this.fileimage = file;
    this.photo = this.fileimage.name;
  }
}
