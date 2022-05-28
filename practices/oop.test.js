import {Animal, Rabbit, Eagle, myRabbit, myEagle} from './oop.js';
import assert from 'node:assert';

assert.ok(Animal);
assert.ok(Rabbit);
assert.ok(Eagle);

assert.strictEqual(myRabbit.name, 'Labi');
assert.strictEqual(myRabbit.age, 2);
assert.strictEqual(myRabbit.eat(), 'Labi sedang makan!');
assert.strictEqual(myRabbit.isMammal, true);

assert.strictEqual(myEagle.name, 'Elo');
assert.strictEqual(myEagle.age, 4);
assert.strictEqual(myEagle.fly(), 'Elo sedang terbang!');
assert.strictEqual(myEagle.isMammal, false);
