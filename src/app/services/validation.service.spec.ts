import { TestBed } from '@angular/core/testing';
import { ValidationService } from './validation.service';

describe('PropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationService = TestBed.get(ValidationService);
    expect(service).toBeTruthy();
  });
});
