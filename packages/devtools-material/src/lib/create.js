/**
 *
 * create by guorg
 *
 * @flow
 */
const fs = require('fs');
const path = require('path');

// const Invalid = [
//   'align',
//   'code-box',
//   'check-button',
//   'common',
//   'consts',
//   'css',
//   'inputtag',
//   'page-loading',
//   'screen-shot',
//   'scroller',
//   'theme',
//   'theme-provider',
//   'trigger',
//   'utils',
//   'empty',
//   'message',
//   'notification',
//   'design-responsive',
// ];
const fileRelativePath = '../src/widgets';
// createDesignInfo();

function getPath(url: string, folderName: string): string {
  return path.join(url, folderName);
}
function getTargetPath(targetPath: string): string {
  const url = targetPath || fileRelativePath;
  return path.join(url);
}
async function getFolderNames(targetPath: string, Invalid: string[]): string[] {
  return fs
    .readdirSync(getTargetPath(targetPath))
    .filter(
      (folderName: string): boolean =>
        Invalid.indexOf(folderName) === -1 && folderName.indexOf('.') === -1
    );
}
function loadMeta(path: string, folderName: string, metaName: string): Object {
  return require(`${path}/${folderName}/lugia.${metaName}.zh-CN.json`);
}
async function getDemoFolderNames(
  allPathFile: string[],
  targetPath: string
): string[] {
  const res = [];
  for (let index = 0; index < allPathFile.length; index++) {
    const folderName = allPathFile[index];
    const stats = await fs.statSync(getTargetPath(targetPath));
    const pos = index + 1;
    if (stats.isDirectory()) {
      res.push(folderName);
    } else {
      console.log('(%d) %s 目录错误  X', pos, folderName);
    }
  }
  return res;
}
async function getFolderName2Meta(
  targetPath: string,
  folderNames: string[]
): Object {
  const metas = {};
  folderNames.forEach((folderName: string, pos: number) => {
    try {
      metas[folderName] = loadMeta(targetPath, folderName, folderName);
    } catch (error) {
      console.log('(%d) %s 读取元信息失败  X', pos, folderName);
      return;
    }
  });
  return metas;
}

export async function createDesignInfo(
  targetPath: string,
  outExtend: string,
  Invalid: string[]
): string {
  const widgetNames = [];
  let designInfo = '';
  try {
    const allPathFile = await getFolderNames(targetPath, Invalid || []);
    const folderNames = await getDemoFolderNames(allPathFile, targetPath);
    const folderName2Meta = await getFolderName2Meta(targetPath, folderNames);
    console.log('共获取组件[%d]个', allPathFile.length);
    folderNames.forEach((folderName: string) => {
      const meta = folderName2Meta[folderName];
      if (!meta) {
        return;
      }
      const { childrenWidget, widgetName } = meta;
      const childrenMeta =
        folderName === 'table'
          ? ''
          : joinChildrenWidgetName(
            widgetName,
            folderName,
            childrenWidget,
            targetPath
          );
      widgetNames.push(widgetName);
      const commonStr =
        widgetName +
        ':' +
        '{ meta: ' +
        JSON.stringify(meta) +
        ', target: ' +
        widgetName +
        '},';
      designInfo =
        (designInfo ? designInfo + commonStr : commonStr) + childrenMeta;
    });

    try {
      const designData =
        getComponent(widgetNames, folderNames, outExtend) +
        'export default { ' +
        designInfo +
        ' };';
      const designPath = getPath(targetPath, 'designInfo.js');
      await fs.writeFileSync(designPath, designData);
    } catch (err) {
      console.log('写入文件 designInfo 失败  X');
      return;
    }
  } catch (e) {
    console.log('%s 异常  X', e);
  }
}

function joinChildrenWidgetName(
  targetWidgetName: string,
  folderName: string,
  childrenWidget: string[],
  targetPath: string
): string {
  let commonStr = '';
  if (childrenWidget && childrenWidget.length > 0) {
    childrenWidget.forEach((item: string) => {
      // const childrenMeta = require(`${fileRelativePath}/${folderName}/lugia.${item}.zh-CN.json`);
      const childrenMeta = loadMeta(targetPath, folderName, item);
      const { widgetName, componentName } = childrenMeta;
      // targetWidgetNames.push(widgetName);
      const childrenNeedExport = childrenMeta.needExport;
      if (childrenNeedExport) {
        commonStr =
          commonStr +
          widgetName +
          ':' +
          '{ meta: ' +
          JSON.stringify(childrenMeta) +
          ', target: ' +
          targetWidgetName +
          '.' +
          componentName +
          '},';
      }

      // targetObject = targetObject ? targetObject + commonStr : commonStr;
    });
  }
  return commonStr;
}
function getComponent(
  widgetNames: string[],
  folderNames: string[],
  outExtend: string
): string {
  if (widgetNames && widgetNames.length > 0) {
    const importInfo = [];
    const extend = outExtend ? `${outExtend}/` : '';
    widgetNames.forEach((item: string, index: number) => {
      importInfo.push(
        `import ${item} from './${extend}${folderNames[index]}';`
      );
    });
    // const importInfo = `import {${component}} from './${folderNames[index]}';`;
    return importInfo.join('');
  }
  return '';
}
