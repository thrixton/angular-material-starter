import { ErrorCodes } from './error-codes';
import { ValidationError } from './validation-error';

export class ErrorResult extends Error {
  constructor(
    public message: string,
    public errorCode?: ErrorCodes,
    public validationErrors?: ValidationError[],
    public hideFromClient?: boolean
  ) {
    super();
  }

  public getType(): string {
    return ErrorResult.Type;
  }
  public static get Type(): string {
    return 'ErrorResult';
  }
}
