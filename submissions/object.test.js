import {restaurant, name, favoriteDrink} from './object.js';
import assert from 'node:assert';

assert.ok(favoriteDrink);
assert.strictEqual(restaurant.name, name);
assert.strictEqual(restaurant['favorite drink'], favoriteDrink);

