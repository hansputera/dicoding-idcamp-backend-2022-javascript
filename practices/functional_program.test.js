import { books, greatAuthors } from './functional_program.js';
import assert from 'node:assert';

assert.strictEqual(books.length, 7);
assert.ok(typeof greatAuthors === 'object' && Array.isArray(greatAuthors));
