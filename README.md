# numeric-hash
Hash a string to a human-readable number. Increases the chances of collision to improve legibility.

No dependencies. Uses standard NodeJS crypto library.

## Why?

Lots of systems generate complex alphanumeric identifiers that work well for ensuring uniqueness in distributed systems, but are difficult for humans to read or repeat verbally.

In many cases, we would be willing to sacrifice some uniqueness for something a human can read, and that's what this library does.

This library hashes an input using SHA1 into a BigInt, then truncates that value to the length specified, and splits it with dashes.

The default result is something that looks like this: `9674-4061-5809-7614`

## Limitations

Given the significantly smaller hash value (numeric only, and shorter) the chances of a collision are dramatically higher compared to a standard SHA1 output.

That said, for cases where the potential number of hashed items is relatively low (on the order of a million), and the use case, the difference in collision probability may be tolerable.

For example, a standard SHA1 hash (160 bits) has effectively 0 chance of collision for 1 million items. 

Whereas for the default settings in this library (16 digits, about 52 bits), the chance of a single collision in 1 million items is about 0.01%.

Depending on your use case and the consequences of a collision this may be tolerable.

If the default settings produce too high a chance of collision for your case, just increasing the digits from 16 to 18 will decrease the chance of collision from around 0.01% to 0.0002% for the same 1 million records, at the cost of decreased legibility.

## API

The function takes a string input (required), a length (optional), and a chunk size (optional).

`hash(input: string, length: number = 16, chunkSize: number = 4)`

## Example

```javascript
const hash = require('numeric-hash');

hash('she sells sea shells by the sea shore'); // '9674-4061-5809-7614'
hash('she sells sea shells by the sea shore', 4, null); // '7614'
```


