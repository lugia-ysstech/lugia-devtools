/**
 *
 * create by guorg
 *
 * @flow
 */
import { camelNamed, recursiveChildren } from './utils';
import { widgetIdInLugiax } from './widgetIdInLugiax';
import { createThemeCode } from './theme';

export function createExpantWidgetid(target: ?(Object[])): string[] {
  const result = [];
  if (!target || target.length < 1) {
    return result;
  }
  recursiveChildren(target, result);

  return result;
}

export function createCustomLabel(
  widgetName: string,
  componentName: string
): string {
  let code = '';
  if (!widgetName || !componentName) {
    return code;
  }
  code =
    'const ' +
    componentName +
    ' = styled.' +
    widgetName +
    '`' +
    'font-size: 16px;' +
    '`;';
  return code;
}

export function createClassCode(
  id: string,
  childPadInfo: Object,
  lugiax: Object,
  themes: Object,
  index: number | string,
  widgetId2Component: Object,
  isResponsive: boolean
): string {
  let classCode = '';
  const padInfo = childPadInfo[id];
  if (padInfo) {
    const { layers, id2WidgetInfo } = padInfo;
    const { layerCode, layerBindCode } = createLayerComponent(
      layers,
      id2WidgetInfo,
      lugiax,
      themes,
      index,
      widgetId2Component,
      isResponsive
    );
    classCode = `${layerBindCode} class ChildPadComponent${index} extends React.Component {
      render(){
        return (
          <React.Fragment>
            ${layerCode}
          </React.Fragment>
        );
      }
    };`;
  }
  return classCode;
}

export function createLayerComponent(
  layers: Object[],
  id2WidgetInfo: Object,
  lugiax: Object,
  themes: Object,
  index: number | string,
  widgetId2Component: Object,
  isResponsive: boolean
): Object {
  let layerCode = '',
    layerBindCode = '';
  layers.forEach((key: Object, i: number) => {
    const { id: layerId, width, height, zIndex, point } = key;
    const layerInfo = id2WidgetInfo[layerId];
    const { module, widgetName, props } = layerInfo;
    const componentName = camelNamed(widgetName);
    // if (module === '@lugia/lugia-web-html') {
    //   const customLabelName = camelNamed(`${widgetName}${index}${i}`);
    //   widgetId2Component[layerId] = customLabelName;
    //   customLabelCode = customLabelCode + createCustomLabel(widgetName, customLabelName);
    // }
    // const name = widgetId2Component[layerId]
    //   ? widgetId2Component[layerId]
    //   : widgetName;
    let name = widgetId2Component[layerId] || widgetName;
    if (module === '@lugia/lugia-web-html') {
      name = widgetId2Component[widgetName];
    }
    const newIndex = index.toString() + i;
    const lugiaxInfo = widgetIdInLugiax(layerId, lugiax, name, newIndex);
    if (lugiaxInfo) {
      const { inLugiax, lugiaxCode, componentName: bindName } = lugiaxInfo;
      widgetId2Component[layerId] = inLugiax ? bindName : componentName;
      if (inLugiax) {
        layerBindCode = layerBindCode + lugiaxCode;
      }
    }
    const hasContainer = 'TargetContainer' in props;
    const { containerStart, containerEnd } = createTargetContainer(
      props.TargetContainer,
      props
    );
    const containerStartLabel = hasContainer ? containerStart : '';
    const containerEndLabel = hasContainer ? containerEnd : '';
    const propsConfig = getComponentProps(props);

    const layerThemeInfo =
      themes && themes.widgetId2ThemeInfo && themes.widgetId2ThemeInfo[layerId];
    const { viewClass, configString } = createThemeCode(
      themes.widgetId2ThemeInfo,
      layerId
    );
    const viewClassCode = layerThemeInfo
      ? ' viewClass="' + viewClass + '"'
      : '';
    const containerThemeCode = containerStartLabel
      ? containerStartLabel + viewClassCode + '>'
      : containerStartLabel;
    const componentThemeCode = hasContainer ? '' : viewClassCode;
    const commonStr = `context.getLayout("${layerId}").`;
    const styleWidth = isResponsive ? `${commonStr}width` : width;
    const styleHeight = isResponsive ? `${commonStr}height` : height;
    const styleLeft = isResponsive ? `${commonStr}point[0]` : point[0];
    const styleRight = isResponsive ? `${commonStr}point[1]` : point[1];
    const theContext = isResponsive ? 'context' : 'undefined';
    layerCode =
      layerCode +
      `<div style={{position: 'absolute',width: '${styleWidth}px',
        height: '${styleHeight}px', zIndex: '${zIndex}', 
        left: '${styleLeft}px', 
        top: '${styleRight}px' }}
        ><Theme config={{'${layerId}':${configString},...themeHandle('${layerId}',${theContext})}}>${containerThemeCode}<${
  widgetId2Component[layerId]
} ${componentThemeCode} ${propsConfig} />${containerEndLabel}</Theme></div>`;
  });

  if (layerCode && isResponsive) {
    layerCode = `<ResponsiveContext.Consumer>{
                    context => {
                        return <React.Fragment>${layerCode}</React.Fragment>
                    }
                }</ResponsiveContext.Consumer>`;
  }

  return { layerCode, layerBindCode };
}

export function getComponentProps(props: ?Object): string {
  if (!props) {
    return '';
  }
  const comProps = [];

  const propsKey = Object.keys(props);
  if (propsKey && propsKey.length > 0) {
    propsKey.forEach((item: string) => {
      if (item !== 'TargetContainer') {
        const propsItem = props && props[item];
        comProps.push(`${item}=${handlePropsType(propsItem)}`);
      }
    });
  }

  return comProps.join(' ');
}
export function createTargetContainer(
  TargetContainer: ?Object,
  props: Object
): Object {
  let labelStart = '',
    labelEnd = '';
  if (!TargetContainer) {
    return { containerStart: labelStart, containerEnd: labelEnd };
  }
  const { widgetName } = TargetContainer;
  const propsCode = getComponentProps(props);
  labelStart = `<${widgetName} ${propsCode}`;
  labelEnd = `</${widgetName}>`;

  return { containerStart: labelStart, containerEnd: labelEnd };
}

export function handlePropsType(propsItem?: any): string {
  if (!propsItem) {
    return '""';
  }
  const type = typeof propsItem;
  if (type === 'object') {
    return `{ ${JSON.stringify(propsItem)} }`;
  }
  if (type === 'number') {
    return `{ ${propsItem} }`;
  }
  return `{'${propsItem}'}`;
}

export function createComponent(
  childrenPad: ?(Object[]),
  widgetId2ChildPadInfo: Object,
  lugiax: Object,
  themes: Object,
  widgetId2Component: Object,
  isResponsive: boolean
): string {
  let classCode = '';
  if (!childrenPad || childrenPad.length < 1) {
    return classCode;
  }
  const padWidgetIds = createExpantWidgetid(childrenPad);
  padWidgetIds.forEach((id: string, index: number) => {
    const componentName = `ChildPadComponent${index}`;
    classCode =
      classCode +
      createClassCode(
        id,
        widgetId2ChildPadInfo,
        lugiax,
        themes,
        index,
        widgetId2Component,
        isResponsive
      );
    widgetId2Component[id] = componentName;
    const lugiaxInfo = widgetIdInLugiax(id, lugiax, componentName, index);
    if (lugiaxInfo) {
      const { inLugiax, lugiaxCode, componentName: bindName } = lugiaxInfo;
      widgetId2Component[id] = inLugiax ? bindName : componentName;
      const bindCode = inLugiax ? lugiaxCode : '';
      classCode = classCode + bindCode;
    }
  });

  return classCode;
}
