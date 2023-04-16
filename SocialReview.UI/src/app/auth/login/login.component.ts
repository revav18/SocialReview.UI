import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLogin } from '../models/userLogin.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(8)]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const userLogin: UserLogin = this.loginForm.value as UserLogin;

      this.authService.userLogin(userLogin).subscribe({
        next: (token: string) => {
          console.log(token);
          localStorage.setItem('authToken', token);
          this.loginForm.reset();
          this.router.navigate(['profile']);
        },
        error: (error) => {
          this.alertService.error(error.error.Details);
        }
      });
    }
  }
}
