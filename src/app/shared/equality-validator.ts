import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors , ValidatorFn} from '@angular/forms';
import { Subscription } from 'rxjs';


export function equalityValidator(compareControlName: string) : ValidatorFn {

  return (ctl: AbstractControl): ValidationErrors | null => {
    if (ctl.value === null || ctl.value.length === 0) {
      return null;
    }
    const compareCtl = ctl.root.get(compareControlName);
    if (compareCtl) {
      const subscription: Subscription = compareCtl.valueChanges.subscribe(() => {
        ctl.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return compareCtl && compareCtl.value !== ctl.value ? { 'compare': true } : null;
  };
}
