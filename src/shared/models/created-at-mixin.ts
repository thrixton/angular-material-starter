import * as moment from 'moment';
import { ICreatedAt } from './i-created-at';
import { toUtc, toLocal } from '../utils/moment-utils';
import { deprecate } from 'util';

export class Base {
  static new<T extends typeof Base>(this: T, props?: Partial<InstanceType<T>>): InstanceType<T> {
    const instance = new this();

    instance.initialize<InstanceType<T>>(props);

    return instance as InstanceType<T>;
  }

  initialize<T extends Base>(props?: Partial<T>) {
    // tslint:disable-next-line: no-unused-expression
    props && Object.assign(this, props);
  }
}

export type AnyConstructor<A = object> = new (...input: any[]) => A;
export type AnyFunction<A = any> = (...input: any[]) => A;
export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>;

class CreatedAtMixinClass extends Base implements ICreatedAt {
  constructor(...args: any[]) {
    super();
    this.initialize(...args);
    if (!this.createdAtUtc) {
      this.createdAtUtc = moment();
    }
  }

  public get createdAtUtcString(): string {
    return this.createdAtUtc.toISOString();
  }

  public set createdAtUtcString(date: string) {
    this.createdAtUtc = moment(date);
  }

  private _createdAtUtcString: string;

  public get createdAtUtc(): moment.Moment {
    return this._createdAtUtcString ? moment(this._createdAtUtcString) : undefined;
  }

  public set createdAtUtc(value: moment.Moment) {
    this._createdAtUtcString = value ? value.toISOString() : undefined;
  }

  /*
   * @deprecated use createdAtUtc instead
   */
  public get createdAtUtcDate(): moment.Moment {
    return toUtc(this.createdAtUtc);
  }

  public get createdAt(): moment.Moment {
    return toLocal(this.createdAtUtcDate);
  }
}

export const CreatedAtMixin = () => CreatedAtMixinClass;

export type CreatedAt = Mixin<typeof CreatedAtMixin>;
