/**
 *
 * create by guorg
 *
 * @flow
 */
const fs = require('fs');
const path = require('path');

const fileRelativePath = '../src/widgets';

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
      const extendComponent = createExtendComponent(meta);
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
        createMeta(widgetName, meta, widgetName) + extendComponent;
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
      const childrenMeta = loadMeta(targetPath, folderName, item);
      const { widgetName, componentName } = childrenMeta;
      const childrenNeedExport = childrenMeta.needExport;
      if (childrenNeedExport) {
        commonStr =
          commonStr +
          createMeta(
            widgetName,
            childrenMeta,
            `${targetWidgetName}.${componentName}`
          );
      }
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
    const extend = outExtend ? `${outExtend}/` : './';
    widgetNames.forEach((item: string, index: number) => {
      importInfo.push(`import ${item} from '${extend}${folderNames[index]}';`);
    });

    return importInfo.join('');
  }
  return '';
}

function createMeta(
  widgetName: string,
  meta: Object,
  targetName: string
): string {
  const str = `${widgetName}: {meta: ${JSON.stringify(
    meta
  )},target: ${targetName}},`;

  return str;
}

function replaceMeta(props: Object, outMeta: Object): Object {
  const propsKeys = Object.keys(props);
  if (propsKeys.length > 0) {
    propsKeys.forEach((item: string) => {
      outMeta.props[item].defaultValue = props[item];
    });
  }

  return outMeta;
}

function createExtendComponent(meta: Object): string {
  const { designInfo } = meta;
  if (!designInfo) {
    return '';
  }
  const componentName = Object.keys(designInfo);
  if (componentName.length > 0) {
    let extendMetaInfo = '';
    const extendMeta = createExtendMeta(meta);
    const { widgetName } = extendMeta;
    componentName.forEach((item: string) => {
      const extendProps = extendMeta.designInfo[item].props;
      const replacedMeta = replaceMeta(extendProps, extendMeta);
      extendMetaInfo += createMeta(item, replacedMeta, widgetName);
    });

    return extendMetaInfo;
  }
  return '';
}

function createExtendMeta(meta: Object): Object {
  const extendMeta = JSON.parse(JSON.stringify(meta));

  return extendMeta;
}
