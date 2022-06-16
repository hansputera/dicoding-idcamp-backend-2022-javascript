/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

// TODO 1
/**
 * @class ValidationError
 */
class ValidationError extends Error {
	/**
	 * @param {string} message ValidationError message.
	 */
	constructor(message) {
		super(message);

		this.name = 'ValidationError';
	}
}

// TODO 2
/**
 * Validate number input.
 * @param {number} arg1
 * @param {number} arg2
 * @param {number} arg3
 * @return {void}
 */
function validateNumberInput(arg1, arg2, arg3) {
	if (typeof arg1 !== 'number')
		throw new ValidationError('Argumen pertama harus number');
	else if (typeof arg2 !== 'number')
		throw new ValidationError('Argumen kedua harus number');
	else if (typeof arg3 !== 'number')
		throw new ValidationError('Argumen ketiga harus number');
	else return;
}

/**
 * Detect Triangle func
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const detectTriangle = (a, b, c) => {
	// TODO 3
	try {
		validateNumberInput(a, b, c);
	} catch (err) {
		return err.message;
	}
	if (a === b && b === c) {
		return 'Segitiga sama sisi';
	}

	if (a === b || a === c || b === c) {
		return 'Segitiga sama kaki';
	}

	return 'Segitiga sembarang';
};

/**
 * Jangan hapus kode di bawah ini
 */
// module.exports = { ValidationError, validateNumberInput, detectTriangle };
export { ValidationError, validateNumberInput, detectTriangle };
