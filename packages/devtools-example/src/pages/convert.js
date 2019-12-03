/**
 *
 * create by ligx
 *
 * @flow
 */
const Convert = require('../../../devtools-conversion/lib');
const Test = require('./test.json');
const fs = require('fs');

fs.writeFileSync(__dirname + '/Page.js', Convert(Test, { exportCusCmp: true }));
