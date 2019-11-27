import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminpageComponent } from './adminpage.component';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminguardGuard } from '../authguard/adminguard.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'admin',component: AdminpageComponent,canActivate: [AdminguardGuard]}
];

@NgModule({
  declarations: [AdminpageComponent],
  imports: [CommonModule,RouterModule.forChild(routes),
    ReactiveFormsModule,NgbModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [RouterModule]
})
export class AdminpageModule { }
