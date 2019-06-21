import { expect } from 'chai';
import 'mocha';
import { Property } from '../../../src/shared/models/property';
import * as moment from 'moment';
import { testUtils } from '../../utils/test-utils';

describe('Property', () => {
  beforeEach(() => {
    testUtils.beforeEach();
  });

  it('should not create an id on new', () => {
    const prop = new Property();
    expect(prop.id).to.equal(undefined);
  });

  it('should display createdAtUtcString in UTC time', () => {
    const prop = new Property();
    const time = moment();

    prop.createdAtUtc = time;
    expect(prop.createdAtUtcString).to.equal(time.toISOString());
  });

  afterEach(() => {
    testUtils.afterEach();
  });
});
