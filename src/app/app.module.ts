import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PickuppointComponent } from './pickuppoint/pickuppoint.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { BookcarsComponent } from './bookcars/bookcars.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    ForgotpasswordComponent,
    PickuppointComponent,
    AdminpageComponent,
    BookcarsComponent,
    OtpverifyComponent
  ],
  imports: [
    BrowserModule,NgbModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCyD380KGjDX0bHwfIKpQ7IsJwpBrOrJm0'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, BrowserAnimationsModule
  ],
  providers: [RegisterComponent,AdminpageComponent,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
  entryComponents: [ForgotpasswordComponent]
})
export class AppModule { }
