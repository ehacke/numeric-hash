const crypto = require("crypto");

const hash = (input, length = 14, chunkSize = 4) => {
  if (typeof input !== 'string') {
    throw new Error('hash input must be a string');
  }

  if (typeof length !== 'number' || length > 48 || length < 1) {
    throw new Error('length mush be a number between 1 and 48');
  }

  const hashResult = BigInt('0x' + crypto.createHash('sha1').update(input).digest('hex'));
  const truncatedHashResult = (hashResult % (10n ** BigInt(length))).toString();

  if (typeof chunkSize === 'number' && chunkSize > 0) {
    return truncatedHashResult.match(new RegExp(`.{1,${chunkSize}}`, 'g')).join('-');
  }

  return truncatedHashResult;
}

module.exports = hash;
