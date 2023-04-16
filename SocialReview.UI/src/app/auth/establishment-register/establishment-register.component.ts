import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert';
import { EstablishmentRegister } from '../models/establishmentRegister.model';

@Component({
  selector: 'app-establishment-register',
  templateUrl: './establishment-register.component.html',
  styleUrls: ['../auth.component.css']
})
export class EstablishmentRegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
    name: ['', Validators.required],
    description: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\+380\d{9}$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const establishmentRegister: EstablishmentRegister = this.registerForm.value as EstablishmentRegister;

      this.authService.establishmentRegister(establishmentRegister).subscribe({
        next: () => {
          this.registerForm.reset();
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          this.alertService.error(error.error.Details);
        }
      });
    }
  }
}
