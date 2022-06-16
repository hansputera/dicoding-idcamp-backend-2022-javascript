import assert from 'node:assert';
import {
	ValidationError,
	validateNumberInput,
	detectTriangle,
} from './error.js';

assert.ok(ValidationError);
assert.ok(ValidationError.name === 'ValidationError');

/**
 * Expect Error message instance.
 * @param {string} message Expected error message.
 * @param {Error} ErrInstance Error instance.
 * @return {boolean}
 */
const expectErrorMessage = (message, ErrInstance) => {
	try {
		throw new ErrInstance(message);
		return true;
	} catch (err) {
		assert.strictEqual(ErrInstance.name, err.name);
		assert.strictEqual(err.message, message);
		return true;
	}
};

/**
 * Expect error message function.
 * @param {string} m Expected error message.
 * @param {Function} func Error function.
 * @param {any[]} d anything u want.
 * @return {void}
 */
const expectErrFunc = (m, func, d) => {
	try {
		func(...d);
	} catch (err) {
		assert.strictEqual(err.message, m);
		return true;
	}
};

expectErrorMessage('Test Error', ValidationError);
assert.strictEqual(
	'Argumen pertama harus number',
	detectTriangle('invalid', 2, 3),
);
expectErrFunc('Argumen kedua harus number', validateNumberInput, [
	1,
	'invalid',
	3,
]);
assert.strictEqual('Segitiga sembarang', detectTriangle(5, 3, 2));
