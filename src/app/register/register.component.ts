import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrentalserviceService } from '../carrentalservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { compareValidator } from '../confirmpassword.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerform = new FormGroup({
    username: new FormControl('', Validators.required),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$')]),
    repassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$'),compareValidator('password')]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+.[a-z]{2,4}$")]),
    admin: new FormControl('', Validators.required)
  });
  fileimage: any = File;
  role;
  photo: string;
  hide = true;
  errormsg:string;

  constructor(public activeModal: NgbActiveModal, private regservice: CarrentalserviceService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() { }

  save() {
    const data = this.customerform.value;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(data));
    formdata.append('image', this.fileimage);
    this.regservice.createCustomer(formdata).subscribe(data =>  {
      this.activeModal.close();}, error =>{ this.errormsg=error.error});
  }

  image(value) {
    const file = value.target.files[0];
    const fsize = file.size;
    const filesize = Math.round((fsize / 1024));
    if (filesize > 2048) {
      console.log(filesize);
      alert("File too Big, please select a file less than 2mb");
    }
    else {
      this.fileimage = file;
      this.photo = this.fileimage.name;
    }
  }
}
