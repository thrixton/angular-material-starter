import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { AuthState } from '../models/auth-state';
import { User } from '../../shared/models/user';
import { LoggingService } from './logging.service';

export enum EditMode {
  New = 'NEW',
  Edit = 'EDIT'
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _currentUser$: BehaviorSubject<User>;
  private _authState$: BehaviorSubject<AuthState>;

  constructor(private _logger: LoggingService) {
    this._currentUser$ = new BehaviorSubject(null);
    this._authState$ = new BehaviorSubject(AuthState.LoggedOut);
  }

  isLoggedIn() {
    return this._authState$.value === AuthState.LoggedIn;
  }

  public onLoggedIn(user: User): void {
    this._logger.debug('onLoggedIn');
    this._logger.debug('Logged in user', { user, json: JSON.stringify(user) });

    this._currentUser$.next(user);
    this._authState$.next(AuthState.LoggedIn);
  }

  public onLoggedOut(): void {
    this._currentUser$.next(null);
    this._authState$.next(AuthState.LoggedOut);
  }

  public get currentUser$(): Observable<User> {
    return this._currentUser$.asObservable();
  }

  public get authState$(): Observable<AuthState> {
    return this._authState$.asObservable();
  }
}
