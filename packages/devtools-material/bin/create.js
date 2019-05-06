#!/usr/bin/env node

const yargs = require('yargs');
const createDesignInfo = require('../target/lib/index').createDesignInfo;

const { argv } = process;
const params = argv.slice(2);

if (params[0] === '-V' || params[0] === '--version') {
  const packages = require('../package.json');
  return console.log(`v${packages.version}`);
}

const targetPath = process.cwd();
const filterParam = yargs.array('filter').argv.filter || [];
const outExtend = yargs.string('outExtend').argv.outExtend || '';
const limit = yargs.number('limit').argv.limit || 10240;

createDesignInfo(targetPath, outExtend, filterParam, limit);
