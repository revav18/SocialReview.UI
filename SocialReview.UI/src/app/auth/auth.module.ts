import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { LoginComponent } from './login/login.component';
import { EstablishmentRegisterComponent } from './establishment-register/establishment-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AuthRoutingModule
  ],
  declarations: [
    CustomerRegisterComponent,
    EstablishmentRegisterComponent,
    LoginComponent
  ],
  exports: [
    CustomerRegisterComponent,
    EstablishmentRegisterComponent,
    LoginComponent,
  ]
})
export class AuthModule { }
