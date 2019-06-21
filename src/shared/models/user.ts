import * as moment from 'moment';
import { v4 as uuid } from 'uuid';
import { ICreatedAt } from './i-created-at';
import { toUtc, toLocal } from '../utils/moment-utils';
import { IId } from './i-id';

export class User implements ICreatedAt, IId {
  constructor() {
    this.createdAtUtc = moment();
    this.id = uuid();
  }

  public id: string;

  public email: string;

  ///#region ICreatedAt
  public createdAtUtc: moment.Moment;

  public get createdAtUtcString(): string {
    return this.createdAtUtc.toISOString();
  }

  public set createdAtUtcString(date: string) {
    this.createdAtUtc = moment(date);
  }

  public get createdAtUtcDate(): moment.Moment {
    return toUtc(this.createdAtUtc);
  }

  public get createdAt(): moment.Moment {
    return toLocal(this.createdAtUtcDate);
  }

  //#endregion ICreatedAt
}
