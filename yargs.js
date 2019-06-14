#!/usr/bin/env node

const yargs = require(yargs);

const argv = yargs
  .help('help')
  .command('sort []')
  .option('folder', {
    alias: 'f',
    describe: 'directory',
    default: '/output'
  })
  .argv