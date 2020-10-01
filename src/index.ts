#!/usr/bin/env node

import sade from 'sade';
import { build, BuildOptions } from './commands/build';
import { dev, DevOptions } from './commands/dev';

const prog = sade('preassr')

prog
  .command('build', 'Produces production output.')
  .action((opts: BuildOptions) => {
    run(build(opts));
  })
  .command('dev', 'Produces a dev-server.', { default: true })
  .action((opts: DevOptions) => {
    run(dev(opts));
  })

prog.parse(process.argv);

function run(p: Promise<void>) {
	p.catch((err: Error) => {
		const text = (process.env.DEBUG ? err.stack : err.message) || err + '';
		process.stderr.write(`\u001b[31m${text}\u001b[0m\n`);
		process.exit(1);
	});
}
