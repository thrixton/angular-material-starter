import * as moment from 'moment';

export interface ICreatedAt {
  createdAtUtc: moment.Moment;

  createdAtUtcString: string;

  /*
   * @deprecated use createdAtUtc instead
   */
  readonly createdAtUtcDate: moment.Moment;

  readonly createdAt: moment.Moment;
}
