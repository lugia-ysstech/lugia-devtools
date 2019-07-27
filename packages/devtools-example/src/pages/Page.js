import React from 'react';
import { Button, DesignResponsive, Theme } from '@lugia/lugia-web';
import hello from '../models/hello';

const ResponsiveContext = DesignResponsive.ResponsiveContext;
const getData = (state, propsName, modelName, fieldName) => {
  const model = state[ modelName ];
  if (!model) {
    return {};
  }
  const paths = fieldName.split('.');
  const data = model.getIn(paths);
  return {
    [ propsName ]:
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

function themeHandle(id, context, dTh) {
  if (context) {
    return context.getLayout(id).theme || {};
  }
  return dTh || {};
}

export default class Page extends React.Component {
  componentDidMount() {
    hello.mutations.load({ eventName: 'componentDidMount' });
  }

  componentWillUnmount() {
    hello.mutations.load({ eventName: 'componentWillUnmount' });
  }

  render() {
    return (
      <div style={{ width: '1920px', zIndex: '4000', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            width: '38px',
            height: '35px',
            zIndex: '0',
            left: '603px',
            top: '448px',
          }}
        >
          <Theme
            config={{
              wbZbwA72: themeHandle('wbZbwA72', undefined, {
                Container: { normal: { background: { color: 'yellow' } } },
              }),
            }}
          >
            <Button viewClass="wbZbwA72"/>
          </Theme>
        </div>
      </div>
    );
  }
}
