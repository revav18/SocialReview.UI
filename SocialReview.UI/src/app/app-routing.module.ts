import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customer-register', component: CustomerRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
