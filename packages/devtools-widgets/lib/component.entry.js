module.exports = (moduleName, version,) => `import designInfo, { load } from './designInfo.js';
const version = '${version}';
const moduleName = '${moduleName}';
function getComponentPropsArr(props, componentTypes) {
  const componentPropsKeys = props && Object.keys(props);
  const TypesKeys = componentTypes;
  const arr = [];
  componentPropsKeys.forEach(i => {
    if (props) {
      const item = props[i];
      if (item && TypesKeys && TypesKeys[item.type]) {
        item.type = TypesKeys[item.type];
      }
      const itemMeta = item && item.meta;
      const hasMeta = itemMeta && Array.isArray(itemMeta);
      const newItemMeta =
        hasMeta &&
        itemMeta.map(metaItem => {
          const { type } = metaItem;
          if (TypesKeys && TypesKeys[type]) {
            return { ...metaItem, type: TypesKeys[type] };
          }
          return metaItem;
        });
      const meta = hasMeta ? { meta: newItemMeta } : {};
      const list = {
        name: i,
        ...item,
        ...meta,
      };
      arr.push(list);
    }
  });
  return arr;
}

const componentMetas = [];
const componentTargets = {};

designInfo.forEach(item => {
  const componentMeta = item.meta;
  const componentScreenshot = item.screenshot;
  const componentModuleName = componentMeta.moduleName || moduleName;
  const componentTarget = item.target;
  const componentProps = componentMeta.props;
  const componentEvents = componentMeta.events;
  const componentTypes = componentMeta.type;
  const designInfoMeta = componentMeta.designInfo;
  const theme = componentMeta.theme;
  const defaultTheme = componentMeta.defaultTheme;
  const aliasName = componentMeta.aliasName;
  const tag = componentMeta.tag;
  const componentPropsArr = componentProps
    ? getComponentPropsArr(componentProps, componentTypes)
    : componentProps;
  const componentEventsArr = componentEvents
    ? getComponentPropsArr(componentEvents)
    : componentEvents;
  const {
    hidden,
    empty,
    category,
    desc,
    widgetName,
    viewClassName,
    title,
    type,
    childrenWidget,
    hideInTollPanel,
  } = componentMeta;
  const key = componentModuleName + '/' + (aliasName || widgetName);
  const id = key + '/' + version;
  const metaList = {
    metaType: 'component',
    id,
    hidden: hidden || empty || hideInTollPanel,
    categories: category,
    description: desc,
    title,
    tag,
    widgetName,
    viewClassName,
    aliasName,
    theme,
    defaultTheme,
    designInfo: designInfoMeta,
    moduleName: componentModuleName,
    screenshot: componentScreenshot,
    events: componentEventsArr,
    props: componentPropsArr,
    childrenWidget,
    type,
  };

  componentMetas.push(metaList);
  componentTargets[key] = componentTarget;
});

export default {
  moduleName: name,
  metas: componentMetas,
  targets: componentTargets,
  load,
  version,
};
`;
