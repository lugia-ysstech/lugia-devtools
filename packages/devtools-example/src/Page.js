import React from 'react'; import styled from 'styled-components'; import lugiax, { bindTo, connect, bind } from '@lugia/lugiax'; import { Theme, DesignResponsive } from '@lugia/lugia-web'; import { ResponsiveContext } from '@lugia/lugia-web/dist/design-responsive/component'; import { Button } from '@lugia/lugia-web'; const getData = (state, propsName, modelName, fieldName) => {
  const model = state[ modelName ];
  if (!model) {
    return {};
  }
  const paths = fieldName.split('.');
  const data = model.getIn(paths);
  return { [propsName]: typeof data !== 'object' ? data : data ? data.toJS ? data.toJS() : data : null };
};
function bindHandleEvent(e) {

  if (!e) {
    return;
  }

  if (e.newValue || e.newValue === 0) {
    return e.newValue;
  }

  if (e.value || e.value === 0) {
    return e.value;
  }

  if (e.target && (e.target.value || e.target.value === 0)) {
    return e.target.value;
  }
}

function themeHandle(id, context) {
  const config = {};
  if (context) {
    const { width, height } = context.getLayout(id);
    if (width) {
      config.width = width;
    }
    if (height) {
      config.height = height;
    }
    return config;
  }

  return config;
}
export default class Page extends React.Component {
  render() {
    return (
      <div style={{ width: '1920px', zIndex: '4000', position: 'relative' }}><div style={{ position: 'absolute', width: '104px',
        height: '32px', zIndex: '0',
        left: '811px',
        top: '431px' }}
      ><Theme config={{ 'wb4^vE72': { Container: { current: { background: { color: '#ab2d2d' }, border: { left: { color: '#4c2828', style: 'solid', width: 1 }, top: { color: '#4c2828', style: 'solid', width: 1 }, right: { color: '#4c2828', style: 'solid', width: 1 }, bottom: { color: '#4c2828', style: 'solid', width: 1 } }, cursor: 'not-allowed', borderRadius: { topLeft: 16, topRight: 16, bottomLeft: 16, bottomRight: 16 }, height: 32, padding: { top: 0, right: 18, bottom: 0, left: 18 } }, normal: { border: { top: { color: '#4c2828', style: 'solid', width: 1 }, right: { color: '#4c2828', style: 'solid', width: 1 }, bottom: { color: '#4c2828', style: 'solid', width: 1 }, left: { color: '#4c2828', style: 'solid', width: 1 } }, background: { color: '#ab2d2d' }, borderRadius: { topLeft: 21, topRight: 21, bottomLeft: 21, bottomRight: 21 }, height: 32, padding: { top: 0, right: 18, bottom: 0, left: 18 }, font: { style: 'normal', weight: 'normal', family: '', size: '' }, color: '' }, hover: { border: { left: { color: '#8090ff', style: 'solid', width: 1 }, top: { color: '#8090ff', style: 'solid', width: 1 }, right: { color: '#8090ff', style: 'solid', width: 1 }, bottom: { color: '#8090ff', style: 'solid', width: 1 } }, background: { color: 'rgba(77,99,255,0.05)' } }, active: { border: { left: { color: '#3e4fcc', style: 'solid', width: 1 }, top: { color: '#3e4fcc', style: 'solid', width: 1 }, right: { color: '#3e4fcc', style: 'solid', width: 1 }, bottom: { color: '#3e4fcc', style: 'solid', width: 1 } }, background: { color: 'rgba(77,99,255,0.05)' } }, disabled: { background: { color: '#ab2d2d' }, border: { left: { color: '#4c2828', style: 'solid', width: 1 }, top: { color: '#4c2828', style: 'solid', width: 1 }, right: { color: '#4c2828', style: 'solid', width: 1 }, bottom: { color: '#4c2828', style: 'solid', width: 1 } }, cursor: 'not-allowed', borderRadius: { topLeft: 16, topRight: 16, bottomLeft: 16, bottomRight: 16 } } }, ButtonText: { current: { color: '#cccccc', font: { size: 14 } }, normal: { color: '#666666', font: { size: 14 }, borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }, background: { color: '#ab2d2d' }, border: { top: { color: '#4c2828', style: 'solid', width: 1 }, right: { color: '#4c2828', style: 'solid', width: 1 }, bottom: { color: '#4c2828', style: 'solid', width: 1 }, left: { color: '#4c2828', style: 'solid', width: 1 } } }, hover: { color: '#8090ff' }, active: { color: '#3e4fcc' }, disabled: { color: '#cccccc', borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }, background: { color: '#ab2d2d' }, border: { top: { color: '#4c2828', style: 'solid', width: 1 }, right: { color: '#4c2828', style: 'solid', width: 1 }, bottom: { color: '#4c2828', style: 'solid', width: 1 }, left: { color: '#4c2828', style: 'solid', width: 1 } }, font: { style: 'normal', weight: 'normal', family: '', size: '' } } }, X: 846, Y: 428, ButtonIcon: { normal: { borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }, background: { color: '#ab2d2d' }, border: { top: { color: '#4c2828', style: 'solid', width: 1 }, right: { color: '#4c2828', style: 'solid', width: 1 }, bottom: { color: '#4c2828', style: 'solid', width: 1 }, left: { color: '#4c2828', style: 'solid', width: 1 } }, font: { style: 'normal', weight: 'normal', family: '', size: '' }, color: '' } } }, ...themeHandle('wb4^vE72', undefined) }}><Button viewClass="wb4^vE72" block="" disabled={'true'} shape={'default'} size={'default'} type={'default'} text={'234214321'} /></Theme></div></div>
    );
  }
}
