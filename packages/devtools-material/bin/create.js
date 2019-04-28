#!/usr/bin/env node

const yargs = require('yargs');
const createDesignInfo = require('../target/lib/index').createDesignInfo;

if (process.argv && process.argv.length > 2) {
  const { argv } = process;
  const params = argv.slice(2);
  const outExpend = params[0];
  const targetPath = process.cwd();
  const filterParam = yargs.array('filter').argv.filter;
  if (!filterParam) {
    createDesignInfo(targetPath, outExpend, []);
  }
  createDesignInfo(targetPath, outExpend, filterParam);
}
