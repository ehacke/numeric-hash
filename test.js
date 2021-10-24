const { expect } = require('chai');
const hash = require('./index');

describe('numeric hash unit tests', () => {
  it('generates hash with default settings', () => {
    expect(hash('she sells sea shells by the sea shore')).to.eql('9674-4061-5809-7614');
  });

  it('generates short hash with no dashes', () => {
    expect(hash('she sells sea shells by the sea shore', 4, null)).to.eql('7614');
  });
});
