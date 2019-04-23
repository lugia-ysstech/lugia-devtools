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
createDesignInfo();

// function getPath(folderName: string) {
//   return path.join(__dirname, folderName);
// }
function getTargetPath(targetPath: string): string {
  const url = targetPath || fileRelativePath;
  return path.join(__dirname, url);
}
async function getFolderNames(targetPath: string, Invalid: string[]): string[] {
  return fs
    .readdirSync(getTargetPath(targetPath))
    .filter(
      (folderName: string): boolean =>
        Invalid.indexOf(folderName) === -1 && folderName.indexOf('.') === -1
    );
}
function loadMeta(folderName: string): Object {
  return require(`${fileRelativePath}/${folderName}/lugia.${folderName}.zh-CN.json`);
}
async function getDemoFolderNames(allPathFile: string[]): string[] {
  const res = [];
  for (let index = 0; index < allPathFile.length; index++) {
    const folderName = allPathFile[index];
    const stats = await fs.statSync(getTargetPath());
    const pos = index + 1;
    if (stats.isDirectory()) {
      res.push(folderName);
    } else {
      console.log('(%d) %s 目录错误  X', pos, folderName);
    }
  }
  return res;
}
async function getFolderName2Meta(folderNames: string[]): Object {
  const metas = {};
  folderNames.forEach((folderName: string, pos: number) => {
    try {
      metas[folderName] = loadMeta(folderName);
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
    const folderNames = await getDemoFolderNames(allPathFile);
    const folderName2Meta = await getFolderName2Meta(folderNames);
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
          : joinChildrenwidgetName(widgetName, folderName, childrenWidget);
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

    return (
      getComponent(widgetNames, folderNames, outExtend) +
      'export default { ' +
      designInfo +
      ' };'
    );
    // try {
    //   const designData =
    //     getComponent(widgetNames, folderNames, outExtend) + 'export default { ' + designInfo + ' };';
    //   const designPath = getPath('../src/widgets/designInfo.js');
    //   await fs.writeFileSync(designPath, designData);
    // } catch (err) {
    //   console.log('写入文件 designInfo 失败  X');
    //   return;
    // }
  } catch (e) {
    console.log('%s 异常  X', e);
  }
}

function joinChildrenwidgetName(
  targetWidgetName: string,
  folderName: string,
  childrenWidget: string[]
): string {
  let commonStr = '';
  if (childrenWidget && childrenWidget.length > 0) {
    childrenWidget.forEach((item: string) => {
      const childrenMeta = require(`${fileRelativePath}/${folderName}/lugia.${item}.zh-CN.json`);
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
    const extend = outExtend ? outExtend : '';
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
