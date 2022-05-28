import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import { format } from 'node:util';

const files = await fs.promises.readdir(
	path.resolve(process.cwd(), 'practices'),
);

files
	.filter((fl) => /.*(spec|test)\.((m|c)?js)/gi.test(fl))
	.forEach(async (file) => {
		let success = true;
		import(path.resolve(process.cwd(), 'practices', file))
			.catch((e) => {
				success = false;
				console.error(file, 'test failed because', format("'%s'", e.message));
			})
			.then(() => {
				if (success) console.log(file, 'test success');
			});
	});
