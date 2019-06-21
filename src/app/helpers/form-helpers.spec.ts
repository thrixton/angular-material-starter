import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { validateFormFields } from './form-helpers';

describe('validateFormFields', () => {
  let fb: FormBuilder;
  let ctl: FormControl;
  let fg: FormGroup;

  beforeEach(() => {
    fb = new FormBuilder();
    ctl = new FormControl('', [Validators.required]);
    fg = fb.group({ test: ctl });
  });

  it('should mark children touched', () => {
    validateFormFields(fg);
    expect(ctl.touched).toBeTruthy();
  });

  it('should return false if formgroup is not valid', () => {
    expect(validateFormFields(fg)).toBeFalsy();
  });

  it('should return true if formgroup is valid', () => {
    ctl.setValue('abc');
    expect(validateFormFields(fg)).toBeTruthy();
  });
});
