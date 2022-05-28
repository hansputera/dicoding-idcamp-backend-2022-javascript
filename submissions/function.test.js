import { minimal, power } from './function.js';
import assert from 'node:assert';

assert.strictEqual(minimal(1, 4), 1);
assert.strictEqual(minimal(3, 2), 2);
assert.strictEqual(minimal(3, 3), 3);

assert.strictEqual(power(7, 3), 343);
assert.strictEqual(power(3, 3), 27);
assert.strictEqual(power(4, 0.5), 2);
