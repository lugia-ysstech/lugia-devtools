/**
 *
 * create by guorg
 *
 * @flow
 */
import type { ExtendParam } from '@lugia/devtools-material';
const fs = require('fs');
const path = require('path');

const fileRelativePath = '../src/widgets';
const defaultImgPath = './default.png';
const defaultBase64 = getBase64(path.join(__dirname, defaultImgPath));

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
  Invalid: string[],
  opt: ExtendParam = {}
): string {
  const { outExtend, limit = 10240, outFile } = opt;
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
      const { childrenWidget, widgetName, theme, title, desc } = meta;
      console.log(
        `处理组件: ${widgetName} ${
          theme ? '' : 'theme不能为空'
        } desc: [${desc}] title: [${title}]`
      );
      const imgBase64 =
        getImgBase64(targetPath, folderName, folderName, limit) ||
        defaultBase64;
      const childrenWidgetName = [];
      const childrenMeta =
        folderName === 'table'
          ? ''
          : joinChildrenWidgetName(
            widgetName,
            folderName,
            childrenWidget,
            targetPath,
            limit,
            childrenWidgetName
          );
      widgetNames.push(widgetName);

      const copyMeta = createExtendMeta(meta);
      copyMeta.childrenWidget = childrenWidgetName;
      const extendComponent = createExtendComponent(
        copyMeta,
        targetPath,
        folderName,
        limit
      );
      const commonStr =
        createMeta(copyMeta, widgetName, imgBase64) + extendComponent;
      designInfo =
        (designInfo ? designInfo + commonStr : commonStr) + childrenMeta;
    });

    const designData =
      getComponent(widgetNames, folderNames, outExtend) +
      'export default [ ' +
      designInfo +
      ' ];';

    if (outFile === 'string') {
      return designData;
    }

    try {
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
  targetPath: string,
  limit: number,
  outChildrenWidgetName: string[]
): string {
  let commonStr = '';
  if (childrenWidget && childrenWidget.length > 0) {
    childrenWidget.forEach((item: string) => {
      const childrenMeta = loadMeta(targetPath, folderName, item);
      const { widgetName } = childrenMeta;
      const childrenNeedExport = childrenMeta.needExport;
      if (childrenNeedExport) {
        const childrenImgBase64 =
          getImgBase64(targetPath, folderName, item, limit) || defaultBase64;
        const childrenWidgetName = `${targetWidgetName}.${widgetName}`;
        outChildrenWidgetName.push(childrenWidgetName);
        const copyChildrenMeta = createExtendMeta(childrenMeta);
        copyChildrenMeta.parentWidget = targetWidgetName;
        copyChildrenMeta.widgetName = childrenWidgetName;
        commonStr =
          commonStr +
          createMeta(copyChildrenMeta, childrenWidgetName, childrenImgBase64);
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
  meta: Object,
  targetName: string,
  imgBase64: string
): string {
  const str = `{meta: ${JSON.stringify(
    meta
  )},target: ${targetName},screenshot: '${imgBase64}'},`;

  return str;
}

function replaceMeta(props: Object, outMeta: Object): Object {
  if (!outMeta.props) {
    console.warn(`error: ${outMeta.aliasName}-主配置中缺少props属性`);
    outMeta.props = {};
  }
  if (props) {
    const propsKeys = Object.keys(props);
    if (propsKeys.length > 0) {
      propsKeys.forEach((item: string) => {
        let outProps = outMeta.props[item];
        if (!outProps) {
          console.warn(
            `error: ${outMeta.aliasName}-主配置中缺少props.${item} 属性`
          );
          outProps = outMeta.props[item] = {};
        }
        outProps.defaultValue = props[item];
      });
    }
  } else {
    console.error(`error: ${outMeta.aliasName} props不能为空!`);
  }
  return outMeta;
}

function createExtendComponent(
  meta: Object,
  targetPath: string,
  folderName: string,
  limit: number
): string {
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
      const designInfoElement = extendMeta.designInfo[item];
      const extendProps = designInfoElement.props;
      extendMeta.title = designInfoElement.title;
      extendMeta.desc = designInfoElement.desc;
      extendMeta.aliasName = item;
      const replacedMeta = replaceMeta(extendProps, extendMeta);
      const extendImgBase64 =
        getImgBase64(targetPath, folderName, item, limit) || defaultBase64;
      extendMetaInfo += createMeta(replacedMeta, widgetName, extendImgBase64);
    });

    return extendMetaInfo;
  }
  return '';
}

function createExtendMeta(meta: Object): Object {
  const extendMeta = JSON.parse(JSON.stringify(meta));

  return extendMeta;
}

function getImgBase64(
  targetPath: string,
  folderName: string,
  imgName: string,
  limit: number
): string {
  const filePath = path.join(targetPath, `${folderName}/${imgName}.png`);
  let base64 = '';
  try {
    const stats = fs.statSync(filePath);
    if (stats) {
      const { size } = stats;
      if (size > limit) {
        throw 'over-limit';
      }
      base64 = getBase64(filePath);
    }
  } catch (e) {
    if (e === 'over-limit') {
      throw new Error(`${imgName}.png 图片过大！`);
    }
    return '';
  }

  return base64;
}

function getBase64(filePath: string): string {
  let data = fs.readFileSync(filePath);
  data = Buffer.from(data).toString('base64');
  data = 'data:image/png;base64,' + data;

  return data;
}
