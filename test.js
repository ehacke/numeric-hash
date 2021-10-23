const { expect } = require('chai');
const hash = require('./index');

describe('numeric hash unit tests', () => {
  it('generates hash with default settings', () => {
    expect(hash('she sells sea shells by the sea shore')).to.eql('7440-6158-0976-14');
  });

  it('generates short hash with no dashes', () => {
    expect(hash('she sells sea shells by the sea shore', 4, null)).to.eql('7614');
  });
});
