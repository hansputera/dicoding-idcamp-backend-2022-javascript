import {evenNumber} from './array.js';
import assert from 'node:assert';

// dalam 100 angka, angka genap totalnya sekitar 50 angka. Karena, ada 2 jenis angka yaitu (ganjil, dan genap) (50, dan 50)
assert.ok(evenNumber.length === 50);
assert.ok(evenNumber[0] === 2); // 2 ialah angka prima awal
assert.ok(evenNumber.at(-1) === 100); // 100 pasti angka genap terakhir.

