import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-sign-in',
  templateUrl: './social-sign-in.component.html',
  styleUrls: ['./social-sign-in.component.scss']
})
export class SocialSignInComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}

  async signInWithGoogle(): Promise<void> {
    await this.authService.signInWithGoogle();
  }

  async signInWithFacebook(): Promise<void> {
    await this.authService.signInWithFB();
  }
}
