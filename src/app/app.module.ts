import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PickuppointComponent } from './pickuppoint/pickuppoint.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { BookcarsComponent } from './bookcars/bookcars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LogoutComponent } from './logout/logout.component';
import { AdminpageModule } from './adminpage/adminpage.module';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    ForgotpasswordComponent,
    PickuppointComponent,
    BookcarsComponent,
    LogoutComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, NgbModule, ReactiveFormsModule,AdminpageModule,
    AppRoutingModule, FormsModule, HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCyD380KGjDX0bHwfIKpQ7IsJwpBrOrJm0'}),
    BrowserAnimationsModule, 
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [RegisterComponent, AdminpageComponent, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
  entryComponents: [ForgotpasswordComponent,LogoutComponent]
})
export class AppModule { }
 