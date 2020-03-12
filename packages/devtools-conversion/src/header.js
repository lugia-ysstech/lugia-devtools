/**
 *
 * create by guorg
 *
 * @flow
 */
import type { HeaderType } from "@lugia/devtools-conversion";
import { camelNamed } from "./utils";
import createLugiaxData, {
  getImportScripts,
  LugiaxDataPrefix
} from "./createLugiaxData";
export function createHeader(
  mainDependencies: ?(Object[]),
  widgetId2Component: Object
): HeaderType {
  let packages =
    'import React, {useRef} from "react";' +
    'import styled from "styled-components";' +
    'import { Theme } from "@lugia/lugia-web";';
  let styledComponentCode = "";
  const moudleMap = {};

  if (!mainDependencies || mainDependencies.length < 1) {
    return { packages, styledComponentCode };
  }
  mainDependencies.forEach((item: Object) => {
    const { widgetName, module } = item;
    const componentName = camelNamed(widgetName);
    if (module === "@lugia/lugia-web-html") {
      styledComponentCode =
        "const " +
        componentName +
        " = styled.div" +
        "`" +
        "font-size: 12px;" +
        "`;";
      widgetId2Component[widgetName] = componentName;
    } else {
      const components = widgetName.split(".");
      if (!moudleMap[components[0]]) {
        packages += `import { ${components[0]} } from '${module}';`;
      }
      moudleMap[components[0]] = true;
    }
  });
  return { packages, styledComponentCode };
}

export function getModelCode(lugiax: ?Object): string {
  if (!lugiax) {
    return "";
  }
  const {
    widgetId2PropsName2BindInfo = {},
    widgetId2EventName2MutationInfo = {},
    page2mutation = {}
  } = lugiax;

  const propsModel = getTargetModal(widgetId2PropsName2BindInfo);
  const eventModal = getTargetModal(widgetId2EventName2MutationInfo);
  const pageModal = [];
  const pageMutationsKey = Object.keys(page2mutation);
  for (let i = 0; i < pageMutationsKey.length; i++) {
    const { modelName } = page2mutation[pageMutationsKey[i]];
    if (modelName) {
      pageModal.push(modelName);
    }
  }

  const { pageData = {} } = lugiax;
  const { dependenciesModels = [], scripts = {} } = pageData;
  let modelName = [
    ...propsModel,
    ...eventModal,
    ...pageModal,
    ...dependenciesModels
  ];

  if (modelName.length > 0 || Object.keys(scripts).length > 0) {
    modelName = [...new Set(modelName)];
    return (
      modelName
      .map((model: string): string => {
        if (model.startsWith(LugiaxDataPrefix)) {
          return "";
        }
        return `import ${model} from '../models/${model}';`;
      })
      .join("") + getImportScripts(scripts)
    );
  }
  return "";
}

export function getTargetModal(target: ?Object): any[] {
  const keys = [];
  if (!target) {
    return keys;
  }
  const targetKeys = Object.keys(target);
  if (!targetKeys || targetKeys.length < 1) {
    return keys;
  }
  targetKeys.forEach((targetItem: string) => {
    const targetValue = target && target[targetItem];
    const value = Object.values(targetValue);
    value.forEach((item: Object) => {
      item && item.modelName && keys.push(item.modelName);
    });
  });
  return keys;
}

export function getLugiadCoreCode(
  lugiax: Object,
  isResponsive: boolean
): string[] {
  if (!lugiax) {
    return "";
  }
  const functionNames = ["themeHandle"];
  let lugiaxCode = "";
  const {
    widgetId2PropsName2BindInfo = {},
    widgetId2EventName2MutationInfo = {},
    pageData = {}
  } = lugiax || {};
  const bindKeys = Object.keys(widgetId2PropsName2BindInfo);
  const mutationKeys = Object.keys(widgetId2EventName2MutationInfo);
  if (bindKeys.length || mutationKeys.length || pageData.model) {
    functionNames.push("bindHandleEvent");
    functionNames.push("getData");
    lugiaxCode =
      "import lugiax, { bindTo, connect, bind, LugiaxData}  from '@lugia/lugiax';";
  }
  if (isResponsive) {
    functionNames.push("pointType2GetCSS");
  }
  const { packageCode, functionsCode } = createLugiadCoreCode(functionNames);
  return {
    lugiadCoreCode: lugiaxCode + packageCode,
    lugiadFuncCode: `${functionsCode};${createLugiaxData(lugiax)}`
  };
}

export function createLugiadCoreCode(names: string[]): string {
  if (!names || !names.length) {
    return "";
  }
  const packageCode = "import LugiadCore from '@lugia/lugiad-core';";
  const functionNames = names.join(",");
  const functionsCode = `const {${functionNames}} = LugiadCore;`;

  return {
    packageCode,
    functionsCode
  };
}

export function hasResponsive(layoutInfos: Object): boolean {
  const { mode2Config = {}, mode2LayoutData = {} } = layoutInfos || {};
  const themeaMainPadKeys = Object.keys(mode2Config);
  const themeComponentKeys = Object.keys(mode2LayoutData);
  return themeaMainPadKeys.length > 1 || themeComponentKeys.length > 1;
}

export function getResponsiveCode(layoutInfos: Object): Object {
  let rspPackagesCode = "",
    rspDeconstructionCode = "";
  if (!layoutInfos) {
    return {
      rspPackagesCode,
      rspDeconstructionCode
    };
  }
  if (hasResponsive(layoutInfos)) {
    rspPackagesCode = "import { DesignResponsive } from '@lugia/lugia-web';";
    rspDeconstructionCode =
      "const ResponsiveContext = DesignResponsive.ResponsiveContext;";
  }

  return {
    rspPackagesCode,
    rspDeconstructionCode
  };
}
