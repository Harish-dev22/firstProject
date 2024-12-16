import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';

@Component({
  selector: 'app-login',
  imports: [ErrorMessageComponent,
            ReactiveFormsModule,
            RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]], // Email or Phone Number
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { identifier, password } = this.loginForm.value;

      // Implement your authentication logic here
      // For example, call an authentication service
      console.log('Logging in with:', identifier, password);

      // On successful login, redirect to home or another page
      this.router.navigate(['/home']);
    }
  }
}