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
  status:boolean=false;
  role:number;
  name:string;
  customerform = new FormGroup({
    phonenumber: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required)
  });
 
  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal,
    private lgnservice:CarrentalserviceService,private route:Router,private naming:AdminpageComponent){}
  open() {
    this.modalService.open(ForgotpasswordComponent);
    this.activeModal.close();
  }
  ngOnInit() {}
    
  check(){
    
    
    this.lgnservice.checkCustomer(this.customerform.value).subscribe(data =>{
          this.role=data;
          console.log(this.role);
         if(this.role === 1)
         {console.log(this.role);
          sessionStorage.setItem('customername',this.name);
           this.route.navigate(['admin']);
           this.activeModal.close();
          }
          else if(this.role === 0){
            sessionStorage.setItem('customername',this.name);
           this.activeModal.close();
           this.route.navigate(['pickuppoint']);
          }    
         });
    }

}
