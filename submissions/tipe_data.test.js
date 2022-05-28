import { firstName, lastName, age, isMarried } from './tipe_data.js';
import assert from 'node:assert';

// validate 'firstName', and 'lastName' is string.
assert.strictEqual(typeof firstName, 'string');
assert.strictEqual(typeof lastName, 'string');

// validate age is a number.
assert.strictEqual(typeof age, 'number');

// validate isMarried
assert.strictEqual(typeof isMarried, 'boolean');
