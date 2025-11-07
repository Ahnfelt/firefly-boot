#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

const fireflyLink = path.resolve(__dirname, '../');
const globalNodeModules = path.join(fireflyLink, 'node_modules');
const localNodeModules = path.join(fireflyLink, '../../node_modules');
const env = {
    ...process.env,
    NODE_PATH: fs.existsSync(globalNodeModules) ? globalNodeModules : localNodeModules,
}

const args = process.argv.slice(2);
const compilerPath = path.join(fireflyLink, 'output/js/ff/compiler/Main.run.mjs');

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