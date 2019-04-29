#!/usr/bin/env node

const yargs = require('yargs');
const createDesignInfo = require('../target/lib/index').createDesignInfo;

const { argv } = process;
const params = argv.slice(2);
const outExpend = params[0] || 'lugia';
if (outExpend === '-V' || outExpend === '--version') {
  const packages = require('../package.json');
  return console.log(`v${packages.version}`);
}

const targetPath = process.cwd();
const filterParam = yargs.array('filter').argv.filter;
const filter = filterParam || [];

createDesignInfo(targetPath, outExpend, filter);
