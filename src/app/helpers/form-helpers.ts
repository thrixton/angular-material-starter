import { FormGroup, FormControl } from '@angular/forms';

export function validateFormFields(fg: FormGroup): boolean {
  fg.markAsTouched();
  Object.keys(fg.controls).forEach(field => {
    const control = fg.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateFormFields(control);
    }
  });
  return fg.valid;
}
