
import path from 'path';
import { promises as fs } from 'fs';
import { createServer } from 'http';
import glob from 'glob';
import polka from 'polka';
import sirv from 'sirv';

export default async function server({ cwd }) {
  // Get pages and create async chunks.
  const pages = glob.sync(path.join(cwd, 'pages') + '/**/*.js', { nodir: true });
}
