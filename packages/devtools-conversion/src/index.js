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
    if (!modelName) {
      return {};
    }
    const paths = fieldName.split('.');
    const data = modelName.getState().getIn(paths);
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
function themeHandle(id, context, dTh) {
  if (context) {
    return context.getLayout(id).theme || {};
  }
  return dTh || {};
}
`;

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

  const { children, layers, id2WidgetInfo, width, zIndex, height } = mainPad;
  const modelCode = getModelCode(lugiax);
  const responsiveCode =
    'const ResponsiveContext = DesignResponsive.ResponsiveContext;';
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
  const nomalCode = `<div style={{width: '${width}px',height: '${height}px',zIndex: '${zIndex}', position: 'relative'}}>${layerCode}</div>`;
  const contextCode = `<DesignResponsive mode2Config={${mode2ConfigData}} mode2LayoutData={${mode2LayoutDatas}} sideMenuWidth={this.props.sideMenuWidth}>
                <ResponsiveContext.Consumer>{
                    context => {
                        return ${nomalCode}
                    }
                }</ResponsiveContext.Consumer>        
            </DesignResponsive>`;
  const Code = isResponsive ? contextCode : nomalCode;
  exportCode = `${packages} ${modelCode} ${stateHeader} ${responsiveCode} ${bindHandle} ${themeHandle} ${styledComponentCode} ${classCode} ${layerBindCode} export default class Page extends React.Component{
  ${getPageMutation(lugiax.page2mutation)}
      render(){
        return (
            ${Code}
        );
      }  
  }`;
  return exportCode;
}
