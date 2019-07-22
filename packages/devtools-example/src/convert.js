/**
 *
 * create by ligx
 *
 * @flow
 */
const Convert = require('../../devtools-conversion/lib');
const Test = require('./test.json');
const fs = require('fs');

console.info(Convert);
fs.writeFileSync('./Page.js', Convert(Test));
