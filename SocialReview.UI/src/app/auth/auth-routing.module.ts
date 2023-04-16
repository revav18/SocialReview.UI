import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CustomerRegisterComponent } from "./customer-register/customer-register.component";
import { EstablishmentRegisterComponent } from "./establishment-register/establishment-register.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customer-register', component: CustomerRegisterComponent },
  { path: 'establishment-register', component: EstablishmentRegisterComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
