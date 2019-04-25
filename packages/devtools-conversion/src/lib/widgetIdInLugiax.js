/**
 *
 * create by guorg
 *
 * @flow
 */
import { createBindCode, createConnectCode } from './createBindCode';

type LugiaxType = {
  inLugiax: boolean,
  lugiaxCode: string,
  componentName: ?string
};

type LugiaxCodeType = { code: string, componentName: string };

export function widgetIdInLugiax(
  id: ?string,
  lugiax: ?Object,
  componentName: ?string,
  index: number | string
): ?LugiaxType {
  if (!id || !lugiax || !componentName) {
    return null;
  }

  const {
    widgetId2PropsName2BindInfo = {},
    widgetId2EventName2MutationInfo = {},
  } = lugiax;
  const bindInfo = widgetId2PropsName2BindInfo[id] || {};
  const mutationInfo = widgetId2EventName2MutationInfo[id] || {};

  if (!bindInfo && !mutationInfo) {
    return null;
  }
  const info = Object.values(bindInfo);
  let lastComponentName = componentName;
  const mutationItem = Object.values(mutationInfo);
  const lugiaxCode = [];

  const bindInfoCode = getBindInfoCode(
    info,
    lastComponentName,
    mutationItem,
    index
  );
  if (bindInfoCode) {
    const { code, componentName } = bindInfoCode;
    lastComponentName = componentName;
    lugiaxCode.push(code);
  }

  const connectInfoCode = getConnectInfoCode(
    info,
    lastComponentName,
    mutationItem,
    index
  );
  if (connectInfoCode) {
    const { code, componentName } = connectInfoCode;
    lugiaxCode.push(code);
    lastComponentName = componentName;
  }
  return {
    inLugiax: true,
    lugiaxCode: lugiaxCode.join(''),
    componentName: lastComponentName,
  };
}

const filterBy = (info: Object[], type: string): Object[] =>
  info.filter(
    (item: Object): boolean => {
      const { bindType = 'connect' } = item;
      return bindType === type;
    }
  );

function getBindInfoCode(
  info: Object[],
  cmpName: string,
  mutationItem: Object[],
  index: number | string
): ?LugiaxCodeType {
  const bindItem = filterBy(info, 'bind');
  if (bindItem && bindItem.length > 0) {
    const { bindCode, componentName } = createBindCode(
      bindItem,
      cmpName,
      mutationItem,
      index
    );
    return { code: bindCode, componentName };
  }
  return null;
}

function getConnectInfoCode(
  info: Object[],
  cmpName: string,
  mutationItem: Object,
  index: number | string
): ?LugiaxCodeType {
  const connectItem = filterBy(info, 'connect');
  if ((connectItem && connectItem.length > 0) || mutationItem.length > 0) {
    const { connectCode, componentName } = createConnectCode(
      connectItem,
      cmpName,
      mutationItem,
      index
    );
    return { code: connectCode, componentName };
  }
  return null;
}
