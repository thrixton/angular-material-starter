import { Injectable, Injector } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _stateService: StateService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (await this._stateService.isLoggedIn()) {
      return true;
    }
    this._router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
