/**
 *
 * create by grg on 2020/5/25
 *
 * @flow
 */
const createThemeMeta = require('@lugia/devtools-material').createThemeMeta;
const path = require('path');

const targetPath = path.join(__dirname, '../widgets');
const invalid = [
  'align',
  'code-box',
  'check-button',
  'common',
  'consts',
  'css',
  'inputtag',
  'page-loading',
  'screen-shot',
  'scroller',
  'theme',
  'theme-provider',
  'trigger',
  'utils',
  'empty',
  'message',
  'notification',
  'design-responsive',
  'affix',
  'anchor',
  'drawer',
  'grid',
  'layout',
  'modal',
  'back-top',
  'popover',
  'popconfirm',
  'tooltip',
  'collapse',
];

async function createThemeMetaFile() {
  await createThemeMeta({ targetPath, invalid });
}

createThemeMetaFile();
