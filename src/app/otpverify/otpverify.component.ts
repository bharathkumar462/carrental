import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CarrentalserviceService } from '../carrentalservice.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css']
})

export class OtpverifyComponent implements OnInit {
  info1:String; 
  
  urlimage;
fileimage:any=File;

form1:FormGroup;


  constructor(private s:CarrentalserviceService ,private s1: DomSanitizer) { 
     this.form1 =new FormGroup({

    name: new FormControl()
    });
  console.log( );
}


image(value)
{
const file= value.target.files[0];

this.fileimage=file;

}
 
imagesave()
{
const data=this.form1.value;
const formdata= new FormData();
formdata.append("data",JSON.stringify(data));
formdata.append('image',this.fileimage);
this.s.postimage(formdata).subscribe(data => {console.log(data)})
}

getData()
{

this.s.getimage(this.form1.value.name).subscribe(data =>{console.log(data);

console.log(data.image)
this.urlimage = 'data:image/jpeg;base64,' + data.image;
console.log(this.urlimage);
});

}

fetchimage(url:string)
{
return this.s1.bypassSecurityTrustUrl(url);
}



  ngOnInit() {}
  

}
