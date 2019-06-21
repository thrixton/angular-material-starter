import { ElementRef, Directive, Renderer2, Input, OnInit } from '@angular/core';
import { ValidationService } from '../services/validation.service';
import { NgControl } from '@angular/forms';
import { LoggingService } from '../services/logging.service';

@Directive({
  selector: '[appValidationHandler]'
})
export class ValidationHandlerDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private control: NgControl,
    renderer: Renderer2,
    private validationService: ValidationService,
    private _logger: LoggingService
  ) {
    this.validationService.validationChanged.subscribe(() => this.handleErrors());
    renderer.listen(el.nativeElement, 'change', event => this.handleClientValidation(event));
  }

  @Input('appValidationHandler') property: string;

  ngOnInit() {
    this._logger.trace('Initialized validation handler', { name: this.property || this.el.nativeElement.name });
  }

  handleErrors() {
    const prop = this.property ? this.property : this.el.nativeElement.name;
    const routeError = this.validationService.getRouteErrors(location.pathname);

    this._logger.debug('handleErrors', { prop: this.property, name: this.el.nativeElement.name });
    if (prop && routeError) {
      const ctl = this.control.control;
      this._logger.debug('Route errors', routeError.errors);
      const error = routeError.errors.find(e => e.property === prop);

      if (error) {
        ctl.setErrors({ remote: error.message });
        ctl.markAsTouched();
        this._logger.debug('Added error', { control: prop });
      } else {
        this._logger.trace('No matching error', { control: prop });
      }
    }
  }

  handleClientValidation(event: any) {
    this._logger.debug('Validation handler: clear errors');
    if (this.control.control.hasError('remote')) {
      let entries = Object.entries(this.control.control.errors);
      const idx = entries.findIndex(c => c['0'] === 'remote');
      entries = entries.splice(idx, 1);

      this.control.control.setErrors(entries);
    }
  }
}
