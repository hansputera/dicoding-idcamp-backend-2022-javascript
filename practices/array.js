/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

const evenNumber = new Array(100)
	.fill()
	.map((_, index) => (index + 1 < 2 || (index + 1) % 2 ? false : index + 1))
	.filter((x) => typeof x === 'number');

/**
 * Jangan hapus kode di bawah ini
 */

// module.exports = evenNumber;
export { evenNumber };
