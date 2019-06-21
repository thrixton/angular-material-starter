import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { validateFormFields } from '../../../helpers/form-helpers';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit {
  fg: FormGroup;
  email = new FormControl('');
  password = new FormControl('');
  /*
  private user: SocialUser;
  private loggedIn: boolean;
*/
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder, // private socialAuthService: SocialAuthService
    public mediaService: TdMediaService
  ) {}

  ngOnInit() {
    this.fg = this.fb.group({
      username: this.email,
      password: this.password
    });

    /*
    this.socialAuthService.authState.subscribe(
      user => {
        this.user = user;
        this.loggedIn = user != null;
        console.log(user);
      },
      error => {
        console.error(error);
      }
    );
    */
  }

  /*
  signInWithGoogle(): void {
    console.log('signInWithGoogle');
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(userData => {
        //on success
        //this will return user data from google. What you need is a user token which you will send it to the server
        console.log(userData);
      })
      .catch(reason => {
        console.error(reason);
      });
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
*/
  ngAfterViewInit() {
    this.mediaService.broadcast();
  }

  signIn() {
    if (!validateFormFields(this.fg)) {
      return;
    }

    this.authService.signIn(this.email.value, this.password.value).subscribe(
      () => {},
      error => {
        console.error(error);
      }
    );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
