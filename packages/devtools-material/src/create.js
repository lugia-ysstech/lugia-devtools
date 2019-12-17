/**
 *
 * create by guorg
 *
 * @flow
 */
import type { ExtendParam } from '@lugia/devtools-material';
const fs = require('fs');
const path = require('path');
let errors = [];
let total = 0;
let childWidgetTotal = 0;
let designInfoTotal = 0;
const fileRelativePath = '../src/widgets';
const defaultBase64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII=';

const checkImage = function(
  extendImgBase64: string,
  widgetName: string,
  item: string = ''
) {
  if (extendImgBase64 === defaultBase64) {
    errors.push(`${widgetName}[${item}] 缺少图片`);
  }
};
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
  const file = fs.readFileSync(
    `${path}/${folderName}/lugia.${metaName}.zh-CN.json`
  );
  return JSON.parse(file);
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
      const msg = `** (第${pos}个) ${folderName} 目录错误  **`;
      console.log(msg, pos, folderName);
      errors.push(msg);
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
      const msg = `** (第${pos}个) ${folderName} 读取元信息失败 **`;
      console.log(msg, pos, folderName);
      errors.push(msg);
      return;
    }
  });
  return metas;
}

const checkInfo = function(
  theme: Object,
  desc: string,
  title: string,
  widgetName: string,
  item: string = ''
) {
  const themeIsRight = theme && Object.keys(theme).length > 0;
  const descIsRigth = !!desc;
  const titleIsRight = !!title;
  const msg = `处理组件: ${widgetName}[${item}] ${
    themeIsRight ? '' : '** theme不能为空 **'
  } ${descIsRigth ? '' : '** desc 不能为空 **'}  ${
    titleIsRight ? '' : '** title 不能为空 **'
  } `;
  console.log(msg);
  if (!themeIsRight || !descIsRigth || !titleIsRight) {
    errors.push(msg);
  }
};

export async function createDesignInfo(
  targetPath: string,
  Invalid: string[],
  opt: ExtendParam = {}
): string {
  errors = [];
  total = 0;
  designInfoTotal = 0;
  childWidgetTotal = 0;
  const { outExtend, limit = 10240, outFile } = opt;
  const widgetNames = [];
  let designInfo = '';
  try {
    const allPathFile = await getFolderNames(targetPath, Invalid || []);
    const folderNames = await getDemoFolderNames(allPathFile, targetPath);
    const folderName2Meta = await getFolderName2Meta(targetPath, folderNames);
    console.log('共获取组件[%d]个', allPathFile.length);
    const widgetName2FolderName = {};
    folderNames.forEach((folderName: string) => {
      const meta = folderName2Meta[folderName];
      if (!meta) {
        return;
      }
      total += 1;
      const { childrenWidget, widgetName, theme, title, desc } = meta;
      checkInfo(theme, desc, title, widgetName);
      widgetName2FolderName[widgetName] = folderName;
      const imgBase64 =
        getImgBase64(targetPath, folderName, folderName, limit) ||
        defaultBase64;
      checkImage(imgBase64, widgetName);
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
      const owner = createMeta(copyMeta, widgetName, imgBase64);
      const extendComponent = createExtendComponent(
        copyMeta,
        targetPath,
        folderName,
        limit
      );
      const commonStr = owner + extendComponent;
      designInfo =
        (designInfo ? designInfo + commonStr : commonStr) + childrenMeta;
    });

    const designData =
      getComponent(widgetNames, widgetName2FolderName, outExtend) +
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
      const msg = '** 写入文件 designInfo 失败  **';
      console.log(msg);
      errors.push(msg);
    }
  } catch (e) {
    const msg = `** ${e} 异常  X`;
    console.log(msg);
    errors.push(msg);
  } finally {
    console.log(
      `总数: ${total} 普通组件:${total -
        designInfoTotal -
        childWidgetTotal} designInfo组件：${designInfoTotal} 子组件: ${childWidgetTotal} 错误: ${
        errors.length
      }`
    );
    console.log('--------------> error');
    errors.forEach((err: string, index: number) => {
      console.error(`${index}: ${err}`);
    });
    console.log('--------------> end');
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
      total++;
      childWidgetTotal++;
      let childrenMeta;
      try {
        childrenMeta = loadMeta(targetPath, folderName, item);
      } catch (error) {
        error.push(
          `** ${folderName}--${targetWidgetName}-${item} 子组件加载错误**`
        );
        return;
      }
      const { widgetName } = childrenMeta;

      try {
        const childrenNeedExport = childrenMeta.needExport;
        if (childrenNeedExport) {
          const childrenImgBase64 =
            getImgBase64(targetPath, folderName, item, limit) || defaultBase64;
          checkImage(childrenImgBase64, widgetName);
          const childrenWidgetName = `${targetWidgetName}.${widgetName}`;
          outChildrenWidgetName.push(childrenWidgetName);
          const copyChildrenMeta = createExtendMeta(childrenMeta);
          copyChildrenMeta.parentWidget = targetWidgetName;
          copyChildrenMeta.widgetName = childrenWidgetName;
          const extendComponent = createExtendComponent(
            copyChildrenMeta,
            targetPath,
            folderName,
            limit
          );
          commonStr =
            commonStr +
            createMeta(
              copyChildrenMeta,
              childrenWidgetName,
              childrenImgBase64
            ) +
            extendComponent;
        }
      } catch (error) {
        error.push(
          `** ${folderName}--${targetWidgetName}-${item}子组件${widgetName}获取元信息错误 **`
        );
      }
    });
  }
  return commonStr;
}
function getComponent(
  widgetNames: string[],
  widgetName2FolderName: Object,
  outExtend: string
): string {
  if (widgetNames && widgetNames.length > 0) {
    const importInfo = [];
    const extend = outExtend ? `${outExtend}/` : './';
    widgetNames.forEach((item: string) => {
      importInfo.push(
        `import ${item} from '${extend}${widgetName2FolderName[item]}';`
      );
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
    const msg = `error: ${outMeta.aliasName}-主配置中缺少props属性`;
    console.warn(msg);
    errors.push(msg);
    outMeta.props = {};
  }
  if (props) {
    const propsKeys = Object.keys(props);
    if (propsKeys.length > 0) {
      propsKeys.forEach((item: string) => {
        let outProps = outMeta.props[item];
        if (!outProps) {
          const msg = `error: ${outMeta.aliasName}-主配置中缺少props.${item} 属性`;
          console.warn(msg);
          errors.push(msg);
          outProps = outMeta.props[item] = {};
        }
        outProps.defaultValue = props[item];
      });
    }
  } else {
    const msg = `error: ${outMeta.aliasName} props不能为空!`;
    console.error(msg);
    errors.push(msg);
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
  delete meta.designInfo;
  const componentName = Object.keys(designInfo);
  if (componentName.length > 0) {
    let extendMetaInfo = '';
    componentName.forEach((item: string) => {
      total += 1;
      designInfoTotal += 1;
      const extendMeta = createExtendMeta(meta);
      const { widgetName } = extendMeta;
      const designInfoElement = designInfo[item];
      const { theme, title, desc, props } = designInfoElement;
      extendMeta.title = title;
      extendMeta.desc = desc;
      checkInfo(theme, desc, title, widgetName, item);
      extendMeta.aliasName = item;
      const replacedMeta = replaceMeta(props, extendMeta);
      replacedMeta.theme = theme;
      const extendImgBase64 =
        getImgBase64(targetPath, folderName, item, limit) || defaultBase64;
      checkImage(extendImgBase64, widgetName, item);
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
