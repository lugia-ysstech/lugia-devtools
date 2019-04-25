#!/usr/bin/env node

const yargs = require('yargs');
const createDesignInfo = require('../target/lib/index').createDesignInfo;

if (process.argv && process.argv.length > 3) {
  const { argv } = process;
  const params = argv.slice(2);
  const filterParam = yargs.array('filter').argv.filter;
  if (!filterParam) {
    createDesignInfo(params[0], params[1], []);
  }
  createDesignInfo(params[0], params[1], filterParam);
}
