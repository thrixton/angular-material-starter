import { expect } from 'chai';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import 'mocha';
import { CreatedAtMixin } from '../../../src/shared/models/created-at-mixin';
import * as moment from 'moment';

describe('CreatedAtMixin', () => {
  class Mixed extends CreatedAtMixin() {}
  const wait = new Promise(resolve => setTimeout(resolve, 20));

  it('should not mutate', async () => {
    const n = new Mixed();
    const origLocal = n.createdAt.clone();
    await wait;
    const origUtc = n.createdAtUtc.clone();

    expect(n.createdAt.toISOString()).to.equal(origLocal.toISOString());
    expect(origLocal.isSame(n.createdAt)).to.be.true;
    expect(origUtc.isSame(n.createdAtUtc)).to.be.true;
    return;
  });

  it('should initialize correctly', async () => {
    const n = new Mixed();
    const crDate = moment().add(-5, 'months');
    n.createdAtUtc = crDate.utc(false);
    await wait;
    const clone = new Mixed(n);

    expect(clone.createdAt.isSame(n.createdAt)).to.be.true;
    return;
  });

  it('should losslessly deserialize ', async () => {
    const n = new Mixed();
    const js = JSON.stringify(n);
    const ds = new Mixed(JSON.parse(js));
    expect(ds.createdAt.isSame(n.createdAt)).to.be.true;
    expect(ds.createdAtUtc.isSame(n.createdAtUtc)).to.be.true;
    expect(ds.createdAtUtcDate.isSame(n.createdAtUtcDate)).to.be.be.true;
    expect(ds.createdAtUtcString).to.equal(n.createdAtUtcString);
    return;
  });
});
