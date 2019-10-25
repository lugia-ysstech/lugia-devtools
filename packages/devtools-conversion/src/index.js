/**
 *
 * create by guorg
 *
 * @flow
 */
import { createHeader, getModelCode, getLugiadCoreCode, getResponsiveCode } from './header';
import { createImageImport } from './img';
import { createComponent, createLayerComponent } from './createClass';
import { unZip } from '@lugia/devtools-core';

function getPageMutation(pageMutation: Object): string {
  if (!pageMutation) {
    return '';
  }
  const eventNames = Object.keys(pageMutation).filter(
    (name: string): boolean =>
      name === 'componentDidMount' || name === 'componentWillUnmount'
  );
  const res = [];
  eventNames.forEach((name: string) => {
    const { modelName, mutationName } = pageMutation[name];
    res.push(`${name}(){
          ${modelName}.mutations.${mutationName}({eventName: '${name}'});
      }`);
  });
  return res.join('');
}

export default function conversion(page: Object, options: Object): string {
  let exportCode = '';
  if (!page) {
    return exportCode;
  }
  const widgetId2Component = {};
  const images = [];
  const { zip } = page;
  if (zip) {
    page = unZip(JSON.stringify(page));
  }
  const { resourcesHead = '' } = options || {};
  const { mainDependencies = [], layoutInfos = {} } = page;
  const { mode2Config, mode2LayoutData } = layoutInfos;
  const isResponsive = Object.keys(mode2Config || {}).length > 1;
  const { packages, styledComponentCode } = createHeader(
    mainDependencies,
    widgetId2Component
  );
  const {
    mainPad,
    widgetId2ChildPad,
    lugiax = {},
    themes = {},
    assets = {},
  } = page;
  const { lugiadCoreCode, lugiadFuncCode } = getLugiadCoreCode(lugiax, isResponsive);
  const { widgetIdHasAssetPropsName = {} } = assets;
  const { children, layers, id2WidgetInfo, zIndex, height } = mainPad;
  const modelCode = getModelCode(lugiax);
  const { rspPackagesCode, rspDeconstructionCode: responsiveCode } = getResponsiveCode(layoutInfos);
  const classCode = createComponent(
    children,
    widgetId2ChildPad,
    lugiax,
    themes,
    widgetId2Component,
    isResponsive,
    { resourcesHead, widgetIdHasAssetPropsName, images }
  );
  const { layerCode, layerBindCode } = createLayerComponent(
    layers,
    id2WidgetInfo,
    lugiax,
    themes,
    'MainPad',
    widgetId2Component,
    isResponsive,
    { resourcesHead, widgetIdHasAssetPropsName, images }
  );
  let imageCode = createImageImport(images);
  imageCode = imageCode ? imageCode + ';' : '';
  const mode2ConfigData = JSON.stringify(mode2Config);
  const mode2LayoutDatas = JSON.stringify(mode2LayoutData);
  const nomalCode = `<div style={{height: '${height}px', width: '100%', zIndex: '${zIndex}', position: 'relative'}}>${layerCode}</div>`;
  const contextCode = `<DesignResponsive mode2Config={${mode2ConfigData}} mode2LayoutData={${mode2LayoutDatas}} sideMenuWidth={this.props.sideMenuWidth}>
                <ResponsiveContext.Consumer>{
                    context => {
                        return ${nomalCode}
                    }
                }</ResponsiveContext.Consumer>        
            </DesignResponsive>`;
  const Code = isResponsive ? contextCode : nomalCode;
  exportCode = `${packages} ${lugiadCoreCode} ${imageCode} ${modelCode} ${rspPackagesCode} ${responsiveCode} ${lugiadFuncCode} ${styledComponentCode} ${classCode} ${layerBindCode} export default class Page extends React.Component{
  ${getPageMutation(lugiax.page2mutation)}
      render(){
        return (
            ${Code}
        );
      }  
  }`;
  return exportCode;
}
