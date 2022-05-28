import * as scoreChecker from './operator_if_else.js';
import assert from 'node:assert';

const randomNilai = Math.floor(Math.random() * 100);
const result = scoreChecker(randomNilai);

assert.strictEqual(typeof result, 'string');
console.log('Nilai:', randomNilai.toString().concat('\n'), result);
