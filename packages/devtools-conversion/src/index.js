/**
 *
 * create by guorg
 *
 * @flow
 */
import {
  createHeader,
  getModelCode,
  getLugiadCoreCode,
  getResponsiveCode,
} from './header';
import { createImageImport } from './img';
import { createComponent, createLayerComponent } from './createClass';
import { unZip } from '@lugia/devtools-core';
import { LugiaxDataPrefix } from './createLugiaxData';

const defaultBackground = '#f8f8f8';
const supportEvents = [ 'componentDidMount', 'componentWillUnmount' ];

function getPageMutation(lugiax: Object, backgroudColor: string): string {
  const { pageMutation, pageData } = lugiax;
  if (!pageMutation && !pageData) {
    return '';
  }
  const { lifeScripts = {} } = pageData;

  const eventNames = supportEvents;

  function getPageMutationCode(name: string): string {
    const mutation = pageMutation && pageMutation[name];
    if (!mutation) {
      return '';
    }
    const { modelName, mutationName } = mutation;
    return `${modelName}.mutations.${mutationName}({eventName: '${name}'});`;
  }
  function getPageDataScripts(name: string): string {
    const { scripts, model: pageModel, dependenciesModels = [] } = pageData;
    const scriptId = lifeScripts[name];
    if (!scriptId || !scripts || !scripts[scriptId]) {
      return '';
    }
    return `${LugiaxDataPrefix}${scriptId}({events: [], props: this.props , pageData: ${
      pageModel ? `${LugiaxDataPrefix}.data` : '{}'
    }, models: [${dependenciesModels.join(',')}]});`;
  }
  function getBackgroundColor(name: string): string {
    if (name === 'componentDidMount') {
      return `document.body.style.background = '${backgroudColor}'`;
    }
    if (name === 'componentWillUnmount') {
      return "document.body.style.background = ''";
    }
    return '';
  }
  const res = [];
  eventNames.forEach((name: string) => {
    res.push(`${name}(){
          ${getPageMutationCode(name)}
          ${getPageDataScripts(name)}
          ${getBackgroundColor(name)}
      }`);
  });

  const constructor = 'constructor';
  if (lifeScripts[constructor]) {
    const consturctorCode = getPageDataScripts(constructor);
    if (consturctorCode) {
      res.push(`constructor(props){
          super(props);
          ${consturctorCode}
      }`);
    }
  }
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
  const { resourcesHead = '', exportCusCmp = false } = options || {};
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
  const { lugiadCoreCode, lugiadFuncCode } = getLugiadCoreCode(
    lugiax,
    isResponsive
  );
  const { widgetIdHasAssetPropsName = {} } = assets;
  const {
    children,
    layers,
    id2WidgetInfo,
    zIndex,
    width,
    backgroudColor = defaultBackground,
  } = mainPad;
  const modelCode = getModelCode(lugiax);
  const {
    rspPackagesCode,
    rspDeconstructionCode: responsiveCode,
  } = getResponsiveCode(layoutInfos);
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
  const wrapWidth = exportCusCmp ? `${width}px` : '100%';
  const background = exportCusCmp ? '' : `backgroundColor: '${backgroudColor}'`;
  const nomalCode = `<div style={{width: '${wrapWidth}', zIndex: '${zIndex}', position: 'relative', ${background}}}>${layerCode}</div>`;
  const contextCode = `<DesignResponsive mode2Config={${mode2ConfigData}} mode2LayoutData={${mode2LayoutDatas}} sideMenuWidth={this.props.sideMenuWidth}>
                <ResponsiveContext.Consumer>{
                    context => {
                        return ${nomalCode}
                    }
                }</ResponsiveContext.Consumer>        
            </DesignResponsive>`;
  const Code = isResponsive ? contextCode : nomalCode;
  const headerCode = `${packages} ${lugiadCoreCode} ${imageCode} ${modelCode} ${rspPackagesCode}`;
  exportCode = `${headerCode}
function create(){
${responsiveCode} ${lugiadFuncCode} ${styledComponentCode} ${classCode} ${layerBindCode} return { 
destroy(){
    if(typeof $__data__ !== 'undefined'){
           $__data__ && $__data__.model && $__data__.model.destroy && $__data__.model.destroy();
    }
},
Component: class Page extends React.Component{
  ${getPageMutation(lugiax, backgroudColor)}
      render(){
        return (
            ${Code}
        );
      }  
  }}}
export default props => {
  const TargetRef = useRef(null);
  useEffect(()=>{
    return ()=>{
    if(TargetRef.current){
        TargetRef.current.destroy();
    }
  }},[]);
  let Target = TargetRef.current;
  if (!Target) {
    Target = TargetRef.current = create();
  }
  return <Target.Component {...props} />;
};`;
  return exportCode;
}
