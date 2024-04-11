import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizacija',
  templateUrl: './autorizacija.component.html',
  styleUrls: ['./autorizacija.component.scss']
})
export class AutorizacijaComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      setTimeout(() => {
        const { email, password, remember } = this.loginForm.value;
        if (email === 'mail@example.com' && password === 'password') {
          if (remember) {
            localStorage.setItem('auth', '1');
          }
          this.router.navigate(['/catalog']);
        } else {
          this.loading = false;
        }
      }, 3000);
    }
  }

  getEmailErrorMessage() {
    if (this.loginForm.controls['email'].hasError('required')) {
      return 'Enter email';
    }
    return this.loginForm.controls['email'].hasError('email') ? 'Email is invalid' : '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.controls['password'].hasError('required') ? 'Enter password' : '';
  }
}
