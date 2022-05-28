import { currency, priceInJPY, priceInIDR } from './map.js';
import assert from 'node:assert';

assert.ok(currency.size === 4);
assert.strictEqual(priceInIDR, priceInJPY * currency.get('JPY'));
