/**
 *
 * create by guorg
 *
 * @flow
 */
import { pointType2GetCSS } from '@lugia/lugiad-core';
import { camelNamed, recursiveChildren } from './utils';
import { widgetIdInLugiax } from './widgetIdInLugiax';
import { createThemeCode } from './theme';
import { LugiaxDataPrefix } from './createLugiaxData';
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
  isResponsive: boolean,
  options: Object
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
      isResponsive,
      options
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
  isResponsive: boolean,
  options: Object
): Object {
  const { widgetIdHasAssetPropsName = {}, resourcesHead = '', images = [] } =
    options || {};
  let layerCode = '',
    layerBindCode = '';
  layers.forEach((key: Object, i: number) => {
    const {
      id: widgetId,
      percentWidth,
      percentHeight,
      percentPoint = [],
      width,
      height,
      zIndex,
      point,
      pointType = 'leftTop',
      pointFix = false,
    } = key;
    const layerInfo = id2WidgetInfo[widgetId];
    const { props } = layerInfo;
    const { module, widgetName } = layerInfo;

    const componentName = camelNamed(widgetName);
    let name = widgetId2Component[widgetId] || widgetName;
    if (module === '@lugia/lugia-web-html') {
      name = widgetId2Component[widgetName];
    }
    const newIndex = index.toString() + i;
    const hasContainer = 'TargetContainer' in props;

    if (hasContainer) {
      widgetId2Component[widgetId] = name;
    } else {
      const lugiaxInfo = widgetIdInLugiax(widgetId, lugiax, name, newIndex);
      if (lugiaxInfo) {
        const { inLugiax, lugiaxCode, componentName: bindName } = lugiaxInfo;
        widgetId2Component[widgetId] = inLugiax ? bindName : componentName;
        if (inLugiax) {
          layerBindCode = layerBindCode + lugiaxCode;
        }
      }
    }
    const assetProps = widgetIdHasAssetPropsName[widgetId];

    const { pageData } = lugiax;
    let containerStartLabel = '';
    let containerEndLabel = '';
    if (hasContainer) {
      let { widgetName } = props.TargetContainer;

      const lugiaxInfo = widgetIdInLugiax(
        widgetId,
        lugiax,
        widgetName,
        newIndex
      );
      if (lugiaxInfo) {
        const { inLugiax, lugiaxCode, componentName: bindName } = lugiaxInfo;
        // widgetId2Component[widgetId] = inLugiax ? bindName : widgetName;
        if (inLugiax) {
          // bindName
          widgetName = bindName;
          layerBindCode = layerBindCode + lugiaxCode;
        }
      }

      const { containerStart, containerEnd } = createTargetContainer(
        { ...props.TargetContainer, widgetName },
        props,
        { assetProps, resourcesHead, images, widgetId, pageData }
      );
      containerStartLabel = containerStart;
      containerEndLabel = containerEnd;
    }
    const propsConfig = getComponentProps(props, {
      assetProps,
      resourcesHead,
      images,
      pageData,
      widgetId,
    });

    const layerThemeInfo =
      themes &&
      themes.widgetId2ThemeInfo &&
      themes.widgetId2ThemeInfo[widgetId];
    const { viewClass, configString } = createThemeCode(
      themes.widgetId2ThemeInfo,
      widgetId
    );
    const viewClassCode = layerThemeInfo
      ? ' viewClass="' + viewClass + '"'
      : '';
    const containerThemeCode = containerStartLabel
      ? containerStartLabel + viewClassCode + '>'
      : containerStartLabel;
    const componentThemeCode = hasContainer ? '' : viewClassCode;
    const commonStr = `context.getLayout("${widgetId}").`;
    let styleWidth = isResponsive
      ? `${commonStr}percentWidth + '%' || ${percentWidth} + '%'`
      : `${percentWidth} +  '%'`;
    if (!percentWidth || pointFix) {
      styleWidth = isResponsive ? `${commonStr}width` : width;
    }
    // let styleHeight = isResponsive
    //   ? `${commonStr}percentHeight + '%' || ${percentHeight} + '%'`
    //   : `${percentHeight} +  '%'`;
    // if (!percentWidth) {
    //   styleHeight = isResponsive ? `${commonStr}height` : height;
    // }
    const responsiveGetLayoutStr = `context.getLayout("${widgetId}").`;
    const styleLeft = isResponsive ? `${commonStr}point[0]` : point[0];
    const styleRight = isResponsive ? `${commonStr}point[1]` : point[1];
    let positionCSSStr = `left: ${styleLeft} + 'px', top: ${styleRight} + 'px'`;
    if (percentWidth) {
      const validPoint = pointFix ? point : percentPoint;
      const validPointStr = pointFix ? 'point' : 'percentPoint';
      const symbolStr = pointFix ? 'px' : '%';
      // todo: top 和 bottom pointFix 为true 时，响应式情况没有处理；
      const getPositionCSS = isResponsive
        ? `pointType2GetCSS[${responsiveGetLayoutStr}pointType || 'leftTop'](${responsiveGetLayoutStr}${validPointStr} || [${validPoint}], ${symbolStr})`
        : pointType2GetCSS[pointType](point, percentPoint, pointFix);
      positionCSSStr = `...${
        isResponsive ? getPositionCSS : JSON.stringify(getPositionCSS)
      }`;
    }
    const useSmart = !!percentWidth;
    const theContext = isResponsive ? 'context' : 'undefined';
    const themeStr = configString ? `${configString}` : '{}';
    layerCode =
      layerCode +
      `<div style={{position: 'absolute',display: 'flex', width: ${styleWidth},
         zIndex: '${zIndex}', 
         ${positionCSSStr} }}
        ><Theme config={{'${widgetId}':themeHandle('${widgetId}',${theContext}, ${themeStr}, ${useSmart})}}>${containerThemeCode}<${widgetId2Component[widgetId]} ${componentThemeCode} ${propsConfig} />${containerEndLabel}</Theme></div>`;
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

// function getLayerCSS(layerId: string, isResponsive: boolean, target: string, defaultValue: number): string | number {
//   const commonStr = `context.getLayout("${layerId}").`;
//
//   return `${commonStr}${target}` || defaultValue;
// }

export function getComponentProps(props: ?Object, opt: ?Object): string {
  if (!props) {
    return '';
  }
  const comProps = [];
  const { assetProps = {}, resourcesHead = '', images = [] } = opt || {};
  const propsKey = Object.keys(props);
  if (propsKey && propsKey.length > 0) {
    propsKey.forEach((item: string) => {
      if (item !== 'TargetContainer') {
        const propsItem = props && props[item];
        const assetPropItem = assetProps[item];
        if (assetPropItem && typeof propsItem === 'string') {
          const url = `${resourcesHead}${propsItem}`;
          const propsValue = `image${images.length}`;
          images.push({
            name: propsValue,
            value: url,
          });
          comProps.push(`${item}={ ${propsValue} }`);
        } else {
          comProps.push(`${item}=${handlePropsType(propsItem)}`);
        }
      }
    });
  }
  const { widgetId, pageData } = opt;
  return comProps.join(' ') + ' ' + getBindDataEvent(widgetId, pageData);
}

// TODO: will test
export function getBindDataEvent(widgetId: string, pageData: Object): string {
  const empty = '';
  if (!pageData) {
    return empty;
  }
  const { scripts } = pageData;
  const { bindEvent } = pageData;
  if (!scripts || !bindEvent) {
    return empty;
  }
  const bindInfo = bindEvent[widgetId];
  if (!bindInfo) {
    return empty;
  }
  const { dependenciesModels = [] } = pageData;
  const { model: pageModel } = pageData;

  const result = [];

  Object.keys(bindInfo).forEach((eventName: string) => {
    const codeName = bindInfo[eventName];
    if (!scripts[codeName]) {
      return;
    }
    result.push(`${eventName} = {(...events)=>{
        return ${LugiaxDataPrefix}${codeName}({events, pageData: ${
  pageModel ? `${LugiaxDataPrefix}.data` : '{}'
}, models: [${dependenciesModels.join(',')}]});
      }}`);
  });
  return result.join(' ');
}

export function createTargetContainer(
  TargetContainer: ?Object,
  props: Object,
  opt: Object
): Object {
  let labelStart = '',
    labelEnd = '';
  if (!TargetContainer) {
    return { containerStart: labelStart, containerEnd: labelEnd };
  }
  const { widgetName } = TargetContainer;
  const propsCode = getComponentProps(props, opt);
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
  if (type === 'number' || type === 'boolean') {
    return `{ ${propsItem} }`;
  }
  if (type === 'string') {
    return `{  \`${propsItem}\` }`;
  }
  return `{'${propsItem}'}`;
}

export function createComponent(
  childrenPad: ?(Object[]),
  widgetId2ChildPadInfo: Object,
  lugiax: Object,
  themes: Object,
  widgetId2Component: Object,
  isResponsive: boolean,
  options: Object
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
        isResponsive,
        options
      );
    widgetId2Component[id] = componentName;
  });

  return classCode;
}
