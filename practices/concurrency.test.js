import assert from 'node:assert';
import {
	NetworkError,
	gettingUserName,
	fetchingUserFromInternet,
} from './concurrency.js';

assert.ok(NetworkError);
assert.ok(NetworkError.name);
assert.ok(NetworkError.name === 'NetworkError');

assert.doesNotReject(fetchingUserFromInternet(false), NetworkError);
assert.rejects(fetchingUserFromInternet(true), NetworkError);

gettingUserName().then((r) => {
	assert.ok(r);
	assert.strictEqual(r, 'John');
});
