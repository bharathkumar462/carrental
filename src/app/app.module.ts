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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    ForgotpasswordComponent,
    PickuppointComponent
  ],
  imports: [
    BrowserModule,NgbModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [RegisterComponent],
  bootstrap: [AppComponent],
  entryComponents: [ForgotpasswordComponent]
})
export class AppModule { }
