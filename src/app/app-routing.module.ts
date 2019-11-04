import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PickuppointComponent } from './pickuppoint/pickuppoint.component';
import { AdminpageComponent } from './adminpage/adminpage.component';


const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full' },
  {path:'welcome', component:WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'pickuppoint', component: PickuppointComponent},
  { path: 'admin', component: AdminpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
