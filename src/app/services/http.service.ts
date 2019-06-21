import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { logging } from 'protractor';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';
import { Base } from 'src/shared/models/created-at-mixin';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _logger: LoggingService, private validationService: ValidationService) {}

  public get<T>(path: string, ct?: new () => T, func?: (source: any) => T): Observable<any> {
    return new Observable(observer => {
      this._logger.debug('API get', { path });
      if (!path.startsWith('/')) {
        path = `/${path}`;
      }
      /*
      API.get('api', path, {})
        .then(v => {
          this._logger.trace('API get complete');
          if (v instanceof Array) {
            this._logger.debug('API get result', { type: 'array', length: v.length });
            const values = v.map(p => {
              let typed = ct ? new ct() : func(p);
              if (typed instanceof Base) {
                this._logger.trace('Initializing base object');
                typed.initialize(p);
              } else {
                typed = ct ? Object.assign(new ct(), p) : func(p);
              }
              this._logger.trace('New', { ctor: ct ? 'ct' : func, raw: p, typed });
              return typed;
            });
            observer.next(values);
          } else {
            let typed: T;
            if (ct) {
              typed = Object.assign(new ct(), v);
              this._logger.trace('New: ct()', { raw: v, typed });
            } else {
              typed = func(v);
              this._logger.trace('New: func()', { raw: v, typed });
            }
            this._logger.debug('API get result', { type: 'instance' });
            this._logger.trace('API get value', v);
            observer.next(typed);
          }
          observer.complete();
          return;
        })
        .catch(error => {
          this._logger.error('API get error', error);
          this.validationService.handleError(error);
          observer.error(error);
        });*/
    });
  }

  public put<T>(path: string, value: T, ct?: new () => T, func?: (source: any) => T): Observable<T> {
    return new Observable(observer => {
      this._logger.debug('API put', { path });
      if (!path.startsWith('/')) {
        path = `/${path}`;
      }
      /*API.put('api', path, {
        body: value
      })
        .then(v => {
          this._logger.debug('API put completed ok');
          let typed = v as T;
          if (ct || func) {
            typed = ct ? Object.assign(new ct(), v) : func(v);
          }
          observer.next(typed);
          observer.complete();
        })
        .catch(error => {
          try {
            this._logger.error('API put error', error);
            this.validationService.handleError(error);
            observer.error(error);
          } catch (error) {
            observer.error(error);
          }
        });*/
    });
  }
}
