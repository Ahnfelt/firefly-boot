#!/usr/bin/env node
const path = require('path');
const { spawnSync } = require('child_process');

const env = {
    ...process.env,
    NODE_PATH: path.resolve(require.resolve('esbuild'), '../../..'),
}

const fireflyLink = path.resolve(__dirname, '../');
const compilerPath = path.join(fireflyLink, 'output/js/ff/compiler/Main.run.mjs');
const args = process.argv.slice(2);

try {
    spawnSync('node', [
        '--enable-source-maps',
        '--harmony-temporal',
        compilerPath,
        ...args
    ], {
        stdio: 'inherit',
        env: env,
    });
} catch (error) {
    process.exit(error.status || 1);
}
