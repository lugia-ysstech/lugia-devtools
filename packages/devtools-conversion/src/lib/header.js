/**
 *
 * create by guorg
 *
 * @flow
 */
import { camelNamed } from './utils';
import type { HeaderType } from '@lugia/devtools-conversion';

export function createHeader(
  mainDependencies: ?(Object[]),
  widgetId2Component: Object
): HeaderType {
  let packages =
    'import React from "react";' +
    'import styled from "styled-components";' +
    'import lugiax, { bindTo, connect, bind } from "@lugia/lugiax";' +
    'import { Theme, DesignResponsive } from "@lugia/lugia-web";' +
    'import { ResponsiveContext } from "@lugia/lugia-web/dist/design-responsive/component";';
  let styledComponentCode = '';

  if (!mainDependencies || mainDependencies.length < 1) {
    return { packages, styledComponentCode };
  }
  mainDependencies.forEach((item: Object) => {
    const { widgetName, module } = item;
    const componentName = camelNamed(widgetName);
    if (module === '@lugia/lugia-web-html') {
      styledComponentCode =
        'const ' +
        componentName +
        ' = styled.div' +
        '`' +
        'font-size: 12px;' +
        '`;';
      widgetId2Component[widgetName] = componentName;
    } else {
      packages =
        packages +
        'import { ' +
        widgetName +
        ' } from ' +
        '"' +
        module +
        '"' +
        ';';
    }
  });

  return { packages, styledComponentCode };
}
export function getModelCode(lugiax: ?Object): string {
  let code = '';
  if (!lugiax) {
    return code;
  }
  let modelName = [];
  const {
    widgetId2PropsName2BindInfo = {},
    widgetId2EventName2MutationInfo = {},
  } = lugiax;

  const propsModel = getTargetModal(widgetId2PropsName2BindInfo);
  const eventModal = getTargetModal(widgetId2EventName2MutationInfo);
  modelName = [ ...propsModel, ...eventModal ];
  if (modelName.length > 0) {
    modelName = [ ...new Set(modelName) ];
    modelName.forEach((model: string) => {
      code = code + `import ${model} from '../models/${model}';`;
    });
  }
  return code;
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
