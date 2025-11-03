#!/usr/bin/env node
const path = require('path');
const { execSync } = require('child_process');

const fireflyLink = path.resolve(__dirname, '../');
const env = {
    ...process.env,
    NODE_PATH: `${path.join(fireflyLink, 'node_modules')}${path.delimiter}${process.env.NODE_PATH || ''}`,
}

const args = process.argv.slice(2);
const compilerPath = path.join(fireflyLink, 'output/js/ff/compiler/Main.run.mjs');

try {
    execSync('node', [
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
