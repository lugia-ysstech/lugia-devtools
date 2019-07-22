/**
 *
 * create by guorg
 *
 * @flow
 */
import { createHeader, getModelCode } from './header';
import { createComponent, createLayerComponent } from './createClass';
import { unZip } from '@lugia/devtools-core';

const stateHeader = `const getData = (state, propsName, modelName, fieldName)=>{
    const model = state[ modelName ];
    if (!model) {
      return {};
    }
    const paths = fieldName.split('.');
    const data = model.getIn(paths);
    return { [propsName] : typeof data !== 'object' ? data : data ? data.toJS  ? data.toJS() : data:null }
  };`;
const bindHandle = `
     function bindHandleEvent(e) {

        if(!e){
          return;
        }

        if(e.newValue || e.newValue === 0){
          return e.newValue;
        }

        if(e.value || e.value === 0){
          return e.value;
        }
        
        if(e.target && (e.target.value || e.target.value === 0)){
          return e.target.value;
        }
      }
  `;
const themeHandle = `
  function themeHandle(id,context){
    const config = {};
    if(context){
      const {width, height} = context.getLayout(id);
      if(width){
        config.Container.normal.width = width;
      }
      if(height){
        config.Container.normal.height = height;
      }
      return config;
    }
    
    return config;
  }
`;

export default function conversion(page: Object): string {
  let exportCode = '';
  if (!page) {
    return exportCode;
  }
  const widgetId2Component = {};
  const { zip } = page;
  if (zip) {
    page = unZip(JSON.stringify(page));
  }
  const { mainDependencies = [], layoutInfos = {} } = page;
  const { mode2Config, mode2LayoutData } = layoutInfos;
  const isResponsive = Object.keys(mode2Config || {}).length > 1;
  const { packages, styledComponentCode } = createHeader(
    mainDependencies,
    widgetId2Component
  );
  const { mainPad, widgetId2ChildPad, lugiax = {}, themes = {} } = page;
  const { children, layers, id2WidgetInfo, width, zIndex } = mainPad;
  const modelCode = getModelCode(lugiax);
  const classCode = createComponent(
    children,
    widgetId2ChildPad,
    lugiax,
    themes,
    widgetId2Component,
    isResponsive
  );
  const { layerCode, layerBindCode } = createLayerComponent(
    layers,
    id2WidgetInfo,
    lugiax,
    themes,
    'MainPad',
    widgetId2Component,
    isResponsive
  );
  const mode2ConfigData = JSON.stringify(mode2Config);
  const mode2LayoutDatas = JSON.stringify(mode2LayoutData);
  const nomalCode = `<div style={{width: '${width}px',zIndex: '${zIndex}', position: 'relative'}}>${layerCode}</div>`;
  const contextCode = `<DesignResponsive mode2Config={${mode2ConfigData}} mode2LayoutData={${mode2LayoutDatas}} sideMenuWidth={this.props.sideMenuWidth}>
                <ResponsiveContext.Consumer>{
                    context => {
                        return ${nomalCode}
                    }
                }</ResponsiveContext.Consumer>        
            </DesignResponsive>`;
  const Code = isResponsive ? contextCode : nomalCode;
  exportCode = `${packages} ${modelCode} ${stateHeader} ${bindHandle} ${themeHandle} ${styledComponentCode} ${classCode} ${layerBindCode} export default class Page extends React.Component{
      render(){
        return (
            ${Code}
        );
      }  
  }`;
  return exportCode;
}
