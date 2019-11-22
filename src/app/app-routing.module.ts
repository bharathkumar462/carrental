import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PickuppointComponent } from './pickuppoint/pickuppoint.component';
import { BookcarsComponent } from './bookcars/bookcars.component';
import { AuthenticateGuard } from './authguard/authenticate.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',component:RegisterComponent  },
  { path: 'pickuppoint', component: PickuppointComponent, canActivate: [AuthenticateGuard] },
  { path: 'admin', loadChildren: () => import("./adminpage/adminpage.module").then(m => m.AdminpageModule) },
  { path: 'bookcars', component: BookcarsComponent, canActivate: [AuthenticateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
