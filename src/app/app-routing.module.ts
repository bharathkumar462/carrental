import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PickuppointComponent } from './pickuppoint/pickuppoint.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BookcarsComponent } from './bookcars/bookcars.component';
import { BookedcarsComponent } from './bookedcars/bookedcars.component';
import { AuthenticateGuard } from './authenticate.guard';
import { AdminguardGuard } from './adminguard.guard';



const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full' },
  {path:'welcome', component:WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'pickuppoint', component: PickuppointComponent,canActivate:[AuthenticateGuard]},
  { path: 'admin', component: AdminpageComponent,canActivate:[AdminguardGuard]},
  { path: 'bookcars', component: BookcarsComponent,canActivate:[AuthenticateGuard]},
  { path: 'b', component:BookedcarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
