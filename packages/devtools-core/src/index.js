/**
 *
 * create by ligx
 *
 * @flow
 */
import type { Layer, LugiaDFile, PolarBearFile } from '@lugia/devtools-core';

const layerZip = {
  areaId: 'a',
  id: 'i',
  zIndex: 'z',
  width: 'w',
  height: 'h',
  point: 'p',
  widgetId: 'wi',
  percentWidth: 'pw',
  percentHeight: 'ph',
  pointType: 'pt',
  percentPoint: 'pp',
  fixType: 'ft',
};

const pointTypeZip = {
  leftTop: 'lt',
  leftBottom: 'lb',
  rightTop: 'rt',
  rightBottom: 'rb',
};

const pointTypeUnZip = {
  lt: 'leftTop',
  lb: 'leftBottom',
  rt: 'rightTop',
  rb: 'rightBottom',
};

const layerUnZip = {
  a: 'areaId',
  i: 'id',
  z: 'zIndex',
  w: 'width',
  h: 'height',
  p: 'point',
  wi: 'widgetId',
  pw: 'percentWidth',
  ph: 'percentHeight',
  pt: 'pointType',
  pp: 'percentPoint',
  ft: 'fixType',
};
const widgetInfoZip = {
  widgetName: 'w',
  aliasName: 'a',
  module: 'm',
  version: 'v',
  props: 'p',
  id: 'i',
};

const widgetInfoUnZip = {
  w: 'widgetName',
  a: 'aliasName',
  m: 'module',
  v: 'version',
  p: 'props',
  i: 'id',
};

const bindInfoZip = {
  modelName: 'm',
  fieldName: 'f',
  propsName: 'p',
  bindType: 'b',
};

const bindInfoUnZip = {
  m: 'modelName',
  f: 'fieldName',
  p: 'propsName',
  b: 'bindType',
};

const mutationZip = {
  eventName: 'e',
  modelName: 'm',
  mutationName: 'mu',
};

const mutationUnZip = {
  e: 'eventName',
  m: 'modelName',
  mu: 'mutationName',
};

export function zip(outLugiadFile: LugiaDFile): Object {
  zipOrUnZip(
    outLugiadFile,
    zipPolearFile,
    zipLayer,
    zipBindInfo,
    zipMutationInfo
  );
  outLugiadFile.zip = true;
  return outLugiadFile;
}

export function unZip(fileJSON: string): Object {
  const lugiadFile = JSON.parse(fileJSON);
  return unZipObject(lugiadFile);
}

export function unZipObject(outLugiadFile: Object): Object {
  return zipOrUnZip(
    outLugiadFile,
    unZipPolearFile,
    unZipLayer,
    unZipBindInfo,
    unZipMutationInfo
  );
}

export function zipOrUnZip(
  outLugiadFile: Object,
  doFile: Function,
  doLayer: Function,
  doBindInfo: Function,
  doMutationInfo: Function
): void {
  const { mainPad, forkPad, widgetId2ChildPad, layoutInfos } = outLugiadFile;
  doFile(mainPad);
  doFile(forkPad);

  zipOrUnZipByObjectKeys(widgetId2ChildPad, doFile);

  if (layoutInfos) {
    const { mode2LayoutData = {} } = layoutInfos;
    zipOrUnZipByObjectKeys(mode2LayoutData, (config: Object) => {
      zipOrUnZipByObjectKeys(config, doLayer);
    });
  }
  const { lugiax = {} } = outLugiadFile;
  const { widgetId2PropsName2BindInfo = {} } = lugiax;
  zipOrUnZipByObjectKeys(widgetId2PropsName2BindInfo, doBindInfo);

  const { widgetId2EventName2MutationInfo = {} } = lugiax;
  zipOrUnZipByObjectKeys(widgetId2EventName2MutationInfo, doMutationInfo);
  return outLugiadFile;
}

export function zipPolearFile(outPolarBearFile: PolarBearFile) {
  zipOrUnZipPolearFile(outPolarBearFile, {
    doLayers: zipLayers,
    doWidgetInfo: zipWidgetInfo,
  });
}

export function unZipPolearFile(outPolarBearFile: PolarBearFile) {
  zipOrUnZipPolearFile(outPolarBearFile, {
    doLayers: unZipLayers,
    doWidgetInfo: unZipWidgetInfo,
  });
}

export function zipOrUnZipPolearFile(
  outPolarBearFile: PolarBearFile,
  handler: { doLayers: Function, doWidgetInfo: Function }
) {
  if (!outPolarBearFile) {
    return;
  }
  const { doLayers, doWidgetInfo } = handler;
  const { layers, id2WidgetInfo } = outPolarBearFile;
  doLayers(layers);
  zipOrUnZipByObjectKeys(id2WidgetInfo, doWidgetInfo);
}

export function zipLayers(outLayers: Layer[]) {
  if (!outLayers) {
    return;
  }
  outLayers.forEach(zipLayer);
}

export function unZipLayers(layers: Layer[]) {
  if (!layers) {
    return;
  }
  layers.forEach(unZipLayer);
}

export function zipLayer(outLayer: Object) {
  changeDataAttribute(outLayer, layerZip);
  changeDataAttributeValue(outLayer, pointTypeZip, 'pt');
}

export function unZipLayer(outLayer: Object) {
  changeDataAttribute(outLayer, layerUnZip);
  changeDataAttributeValue(outLayer, pointTypeUnZip, 'pointType');
}

export function zipWidgetInfo(outInfo: Object) {
  changeDataAttribute(outInfo, widgetInfoZip);
}

export function unZipWidgetInfo(outInfo: Object) {
  changeDataAttribute(outInfo, widgetInfoUnZip);
}

export function zipBindInfo(outInfo: Object) {
  zipOrUnZipByObjectKeys(outInfo, (config: Object) => {
    changeDataAttribute(config, bindInfoZip);
  });
}

export function unZipBindInfo(outInfo: Object) {
  zipOrUnZipByObjectKeys(outInfo, (config: Object) => {
    changeDataAttribute(config, bindInfoUnZip);
  });
}

function zipOrUnZipByObjectKeys(outInfo: Object, cb: Function) {
  if (!outInfo) {
    return;
  }
  Object.keys(outInfo).forEach((propsName: string) => {
    const config = outInfo[propsName];
    if (!config) {
      return;
    }
    cb(config);
  });
}

export function zipMutationInfo(outInfo: Object) {
  zipOrUnZipByObjectKeys(outInfo, (config: Object) => {
    changeDataAttribute(config, mutationZip);
  });
}

export function unZipMutationInfo(outInfo: Object) {
  zipOrUnZipByObjectKeys(outInfo, (config: Object) => {
    changeDataAttribute(config, mutationUnZip);
  });
}

export function changeDataAttribute(outData: Object, map: Object) {
  if (!outData || !map) {
    return;
  }
  Object.keys(map).forEach((targetName: string) => {
    const zipName = map[targetName];
    outData[zipName] = outData[targetName];
    delete outData[targetName];
  });
}

export function changeDataAttributeValue(
  outData: Object,
  map: Object,
  targetField: string
) {
  if (!outData || !map) {
    return;
  }
  const value = outData[targetField];
  if (value !== null || value !== undefined) {
    outData[targetField] = map[value] || value;
  }
}

const copyDataZip = {
  copyTreeData: 'c',
  areaId: 'a',
  areaType: 'at',
  info: 'i',
  layer: 'l',
  themeInfo: 't',
  bindInfo: 'b',
  mutationInfo: 'm',
};

const copyDataUnZip = {
  c: 'copyTreeData',
  a: 'areaId',
  at: 'areaType',
  i: 'info',
  l: 'layer',
  t: 'themeInfo',
  b: 'bindInfo',
  m: 'mutationInfo',
};

export function zipCopyData(outCopyData: Object): Object {
  if (!outCopyData) {
    return;
  }
  const { copyData } = outCopyData;
  if (!copyData || copyData.length === 0) {
    return;
  }
  copyData.forEach((item: Object) => {
    const { info, layer, bindInfo, mutationInfo } = item;
    zipWidgetInfo(info);
    zipLayer(layer);
    zipBindInfo(bindInfo);
    zipMutationInfo(mutationInfo);
    changeDataAttribute(item, copyDataZip);
  });
  return outCopyData;
}

export function unZipCopyData(outCopyData: Object): Object {
  if (!outCopyData) {
    return;
  }
  const { copyData } = outCopyData;
  if (!copyData || copyData.length === 0) {
    return;
  }
  copyData.forEach((item: Object) => {
    const infoName = copyDataZip.info;
    const layerName = copyDataZip.layer;
    const bindInfoName = copyDataZip.bindInfo;
    const mutationInfoName = copyDataZip.mutationInfo;
    const {
      [infoName]: info,
      [layerName]: layer,
      [bindInfoName]: bindInfo,
      [mutationInfoName]: mutationInfo,
    } = item;

    unZipWidgetInfo(info);
    unZipLayer(layer);
    unZipBindInfo(bindInfo);
    unZipMutationInfo(mutationInfo);
    changeDataAttribute(item, copyDataUnZip);
  });
  return outCopyData;
}
