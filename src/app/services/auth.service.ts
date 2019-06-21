import { Injectable, Injector, OnInit, Inject } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

import { StateService } from './state.service';

import * as moment from 'moment';
import { ErrorResult } from '../../shared/utils/error-result';
import { ErrorCodes } from '../../shared/utils/error-codes';
import { ValidationService } from './validation.service';
import { ValidationError } from '../../shared/utils/validation-error';
import { LoggingService } from './logging.service';
import { User } from 'src/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private notifyService: NotificationService;

  constructor(
    private router: Router,
    private injector: Injector,
    private stateService: StateService,
    private validationService: ValidationService,
    private _logger: LoggingService
  ) {
    this.notifyService = this.injector.get(NotificationService);
    _logger.debug('AuthService.ctor');
  }

  async signInWithFB(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async signInWithGoogle(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  signIn(email: string, password: string): Observable<User> {
    return new Observable(observer => {
      const user = new User();
      user.email = email;
      observer.next(user);
      this.stateService.onLoggedIn(user);
    });
  }

  signOut() {
    this.stateService.onLoggedOut();
    this.router.navigate(['/signin']);
  }
}
