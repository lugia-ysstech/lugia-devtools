/**
 *
 * create by grg on 2020/5/27
 *
 * @flow
 */
const createDesignInfo = require('@lugia/devtools-material').createDesignInfo;
const path = require('path');
const ensureFileSync = require('fs-extra').ensureFileSync;
const writeFileSync = require('fs-extra').writeFileSync;

const targetPath = path.join(__dirname, '../widgets');
const commonInvalid = [ 'common', 'consts', 'css', 'utils' ];
const componentInvalid = [
  ...commonInvalid,
  'align',
  'code-box',
  'check-button',
  'inputtag',
  'page-loading',
  'screen-shot',
  'scroller',
  'theme',
  'theme-provider',
  'trigger',
  'empty',
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
const hideInTollPanelComponents = {
  message: 'message',
};

const loadStr = "import { load } from './css/theme-common-dict.js';\n" + 'export { load };';

async function createDesignInfoFile() {
  const designInfoStr = await createDesignInfo(targetPath, componentInvalid, {
    outFile: 'string',
    hideInTollPanelComponents,
  });
  const designInfoPath = path.join(targetPath, 'designInfo.js');
  ensureFileSync(designInfoPath);
  writeFileSync(designInfoPath, designInfoStr + loadStr);
}

createDesignInfoFile();
