/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

/**
 * @class Animal
 */
class Animal {
	/**
	 * @constructor
	 * @param {string} name Animal name.
	 * @param {number} age Animal age.
	 * @param {boolean} isMammal Animal is mamalia?
	 */
	constructor(name, age, isMammal) {
		this.name = name;
		this.age = age;
		this.isMammal = isMammal;
	}
}

/**
 * @class Rabbit
 */
class Rabbit extends Animal {
	/**
	 * @constructor
	 * @param {string} name Rabbit's name
	 * @param {number} age Rabbit's age
	 */
	constructor(name, age) {
		super(name, age, true);
	}

	/**
	 * Rabbit.eat()
	 * @return {string}
	 */
	eat() {
		return `${this.name} sedang makan!`;
	}
}

/**
 * @class Eagle
 */
class Eagle extends Animal {
	/**
	 * @constructor
	 * @param {string} name Eagle's name.
	 * @param {number} age Eagle's age.
	 */
	constructor(name, age) {
		super(name, age, false);
	}

	/**
	 * Eagle.fly()
	 * @return {string}
	 */
	fly() {
		return `${this.name} sedang terbang!`;
	}
}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

/**
 * Jangan hapus kode di bawah ini
 */

// module.exports = {
//  Animal, Rabbit, Eagle, myRabbit, myEagle,
// };

export { Animal, Rabbit, Eagle, myRabbit, myEagle };
