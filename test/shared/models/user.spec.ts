import { expect } from 'chai';
import { User } from '../../../src/shared/models/user';
import * as moment from 'moment';
import 'mocha';

describe('User', () => {
  it('should display createdAtUtcString in UTC time', () => {
    const user = new User();
    const time = moment();

    user.createdAtUtc = time;
    expect(user.createdAtUtcString).to.equal(time.toISOString());
  });

  it('should create an id on new', () => {
    const user = new User();
    expect(user.id).not.to.be.empty;
  });
});
