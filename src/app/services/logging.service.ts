import { Injectable } from '@angular/core';
import { NGXLogger, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(private _logger: NGXLogger) {
    const config = _logger.getConfigSnapshot();
    config.level = NgxLoggerLevel[environment.logLevel];
    _logger.updateConfig(config);
  }

  public trace(message: any, ...args: any[]): void {
    this._logger.trace(message, ...args);
  }
  public debug(message: string, ...args: any[]): void {
    this._logger.debug(message, ...args);
  }

  public warn(message: any, ...args: any[]): void {
    this._logger.warn(message, ...args);
  }

  error(message: string, ...args: any[]): any {
    this._logger.error(message, ...args);
  }
}
