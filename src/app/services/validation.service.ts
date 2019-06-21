import { Injectable, EventEmitter } from '@angular/core';

import { ErrorResult } from '../../shared/utils/error-result';
import { ErrorCodes } from '../../shared/utils/error-codes';
import { ValidationError } from '../../shared/utils/validation-error';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';
import { FormGroup, FormControl } from '@angular/forms';

export interface RouteErrors {
  route: string;
  error: string;
  errors: ValidationError[];
}

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  errors: RouteErrors[];
  validationChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private _logger: LoggingService, private _notifyService: NotificationService) {
    this.errors = [];
  }

  getRouteErrors(route: string): RouteErrors {
    let errors = this.errors.find(e => e.route === route);
    if (!errors) {
      errors = <RouteErrors>{ route: route, errors: [] };
    }
    return errors;
  }

  getComponentErrors(route: string, key: string): string[] {
    const error = this.getRouteErrors(route);
    const res = error.errors[key];
    this._logger.trace('Attempting to match error', { route, key, error: res });
    return res;
  }

  getComponentErrorsLike(route: string, keyPrefix: string): string[] {
    const error = this.getRouteErrors(route);
    const results: string[] = [];

    Object.keys(error.errors).forEach(c => {
      if (c.startsWith(keyPrefix)) {
        results.splice(results.length, 0, error.errors[c]);
      }
    });
    return results;
  }

  setErrors(errors: RouteErrors) {
    const index = this.errors.findIndex(e => e.route === errors.route);
    if (index >= 0) {
      this.errors[index] = errors;
    } else {
      this.errors.push(errors);
    }
    this._logger.debug('Route errors', this.errors);
    this.validationChanged.emit(true);
  }

  private setModelStateErrors(error: any): boolean {
    const validationError = error as ErrorResult;
    this._logger.debug('Check model errors', { validationError });
    if (validationError && validationError.errorCode === ErrorCodes.ModelValidationErrors) {
      this._logger.debug('Setting validation errors', validationError);
      this.setErrors(<RouteErrors>{
        route: location.pathname,
        error: validationError.message,
        errors: validationError.validationErrors
      });
      return true;
    }
    return false;
  }

  handleError(error: any): void {
    let currentError = error;

    if (error.hasOwnProperty('response') && error['response'].hasOwnProperty('data')) {
      const eRes = error.response.data as ErrorResult;
      this._logger.debug('Error.response.data', eRes);
      currentError = eRes;
    }

    if (!this.setModelStateErrors(currentError)) {
      let message: string;
      if (error instanceof ErrorResult) {
        message = error.message;
      } else {
        message = error.message
          ? error.message
          : error.status
          ? `${error.status} - ${error.statusText}`
          : 'Server error';
      }
      this._logger.trace('Notifying error', message);
      this._notifyService.onError(message);
    }
  }

  validateFormFields(fg: FormGroup): boolean {
    fg.markAsTouched();
    Object.keys(fg.controls).forEach(field => {
      const control = fg.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        if (!control.valid) {
          this._logger.trace('Control not valid', field);
        }
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      } else {
        this._logger.trace('Invalid control', control);
      }
    });
    if (!fg.valid) {
      this._logger.trace('Form not valid');
    }
    return fg.valid;
  }
}
