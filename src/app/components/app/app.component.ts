import { Component, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { IconService } from '../../services/icon.service';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';
import { AuthState } from 'src/app/models/auth-state';
import { Router } from '@angular/router';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public isLoggedIn = false;

  menuItems = [
    {
      title: 'Home',
      route: '/',
      icon: 'fas:home'
    }
  ];

  constructor(
    public mediaService: TdMediaService,
    iconService: IconService,
    private stateService: StateService,
    private authService: AuthService,
    private router: Router,
    private logger: LoggingService
  ) {
    stateService.authState$.subscribe(state => {
      this.isLoggedIn = state === AuthState.LoggedIn;
      router.navigate(['/']);
    });
  }

  ngAfterViewInit() {
    this.mediaService.broadcast();
  }

  signOut() {
    this.authService.signOut();
  }
}
