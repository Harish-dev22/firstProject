import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { LoginFormViewModel } from '../../common/models/form/authentication-form.view-model';
import { UserService } from '../../common/services/api/user.service';

@Component({
  selector: 'app-login',
  imports: [ErrorMessageComponent,
            ReactiveFormsModule,
            RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public mainForm!: FormGroup<LoginFormViewModel>;;

  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router
  ) {
    this.mainForm = this._constructLoginForm();
  }

  private _constructLoginForm(): FormGroup<LoginFormViewModel> {
    return new FormGroup(<LoginFormViewModel>{
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.mainForm.valid) {
      const {  password } = this.mainForm.value;

      // Implement your authentication logic here
      // For example, call an authentication service

      // On successful login, redirect to home or another page
      this._router.navigate(['/home']);
    }
  }
}