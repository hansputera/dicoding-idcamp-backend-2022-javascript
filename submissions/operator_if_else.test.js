import { scoreChecker } from './operator_if_else.js';
import assert from 'node:assert';

const randomNilai = Math.floor(Math.random() * 100);
const result = scoreChecker(randomNilai);

console.log(`[OPERATOR_IF_ELSE]:: [RESULT= '${result}']::[NILAI= '${randomNilai}']`);

assert.strictEqual(typeof result, 'string');

if (randomNilai >= 90) {
	assert.strictEqual(result, 'Selamat! Anda mendapatkan nilai A.');
} else if (randomNilai >= 80 && randomNilai <= 89) {
	assert.strictEqual(result, 'Anda mendapatkan nilai B.');
} else if (randomNilai >= 70 && randomNilai <= 79) {
	assert.strictEqual(result, 'Anda mendapatkan nilai C.');
} else if (randomNilai >= 60 && randomNilai <= 69) {
	assert.strictEqual(result, 'Anda mendapatkan nilai D.');
} else {
	assert.strictEqual(result, 'Anda mendapatkan nilai E.');
}
