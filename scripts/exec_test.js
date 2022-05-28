import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import {format} from 'node:util';

const files = await fs.promises.readdir(
	path.resolve(process.cwd(), 'submissions'),
);

files
	.filter((fl) => /.*(spec|test)\.((m|c)?js)/gi.test(fl))
	.forEach(async (file) => {
		import(path.resolve(process.cwd(), 'submissions', file)).catch((e) => {
                  console.error(file, 'test failed because', format(
                    "'%s'", e.message));
                }).then(() => {
                  console.log(file, 'test success');
                });
	});
