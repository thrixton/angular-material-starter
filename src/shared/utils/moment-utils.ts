import * as moment from 'moment';

export function toUtc(utcMoment: moment.Moment): moment.Moment {
  return moment.utc(utcMoment);
}

export function toLocal(utcMoment: moment.Moment): moment.Moment {
  return moment.utc(utcMoment.toDate()).local();
}
