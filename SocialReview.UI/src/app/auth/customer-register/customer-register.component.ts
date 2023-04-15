import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { CustomerRegister } from 'src/app/auth/models/customerRegister.model';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\+380\d{9}$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    const customerRegister: CustomerRegister = this.registerForm.value as CustomerRegister;

    this.authService.customerRegister(customerRegister).subscribe({
      next: () => {
        this.registerForm.reset();
        this.router.navigate(['/profile]']);
      },
      error: (error) => {
        this.alertService.error(error.error.Details);
      }
    });
  }
}
