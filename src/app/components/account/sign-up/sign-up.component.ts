import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { equalityValidator } from '../../../shared/equality-validator';
import { NotificationService } from '../../../services/notification.service';
import { TdMediaService } from '@covalent/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required, equalityValidator('password')]);
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private notifyService: NotificationService,
    public mediaService: TdMediaService,
    private _validationService: ValidationService
  ) {}
  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  signUp() {
    if (!this._validationService.validateFormFields(this.signUpForm)) {
      return;
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
