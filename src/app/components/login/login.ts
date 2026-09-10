import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  loginForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // DATOS QUEMADOS
      if (email === 'admin@siae.com' && password === '123456') {
        this.successMessage = '¡Inicio de sesión exitoso!';
        this.errorMessage = '';
        this.router.navigate(['dashboard']);
      } else {
        this.errorMessage = 'Correo o contraseña incorrectos.';
        this.successMessage = '';
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
