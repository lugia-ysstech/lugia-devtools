import React from 'react';
import styled from 'styled-components';
import lugiax, { bindTo, connect, bind } from '@lugia/lugiax';
import { Theme, DesignResponsive } from '@lugia/lugia-web';
import { ResponsiveContext } from '@lugia/lugia-web/dist/design-responsive/component';
import { Button } from '@lugia/lugia-web';
const getData = (state, propsName, modelName, fieldName) => {
  const model = state[modelName];
  if (!model) {
    return {};
  }
  const paths = fieldName.split('.');
  const data = model.getIn(paths);
  return {
    [propsName]:
      typeof data !== 'object'
        ? data
        : data
          ? data.toJS
            ? data.toJS()
            : data
          : null,
  };
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
      <div style={{ width: '1920px', zIndex: '4000', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            width: '104px',
            height: '32px',
            zIndex: '0',
            left: '811px',
            top: '431px',
          }}
        >
          <Theme>
            <Button
              viewClass="wb4^vE72"
              block=""
              disabled={'true'}
              shape={'default'}
              size={'default'}
              type={'default'}
              text={'234214321'}
            />
          </Theme>
        </div>
      </div>
    );
  }
}
