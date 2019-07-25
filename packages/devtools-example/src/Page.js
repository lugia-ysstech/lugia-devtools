import React from 'react';
import styled from 'styled-components';
import lugiax, { bindTo, connect, bind } from '@lugia/lugiax';
import { deepMerge } from '@lugia/object-utils';
import { Theme, DesignResponsive } from '@lugia/lugia-web';
import { Button } from '@lugia/lugia-web';
const ResponsiveContext = DesignResponsive.ResponsiveContext;
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

function themeHandle(id, context, dTh) {
  if (context) {
    return context.getLayout(id).theme || {};
  }
  return dTh || {};
}
export default class Page extends React.Component {
  render() {
    return (
      <DesignResponsive
        mode2Config={{
          '1920x1080': {
            mainPadSize: { width: 1920, height: 1080 },
            widthRange: [ 801, 50000 ],
            scale: 0.8,
            forkPadPoint: [ -24160, -24530 ],
          },
          '800x500': {
            mainPadSize: { width: 800, height: 500 },
            widthRange: [ 0, 800 ],
            scale: 1.8,
            forkPadPoint: [ -24160, -24530 ],
          },
        }}
        mode2LayoutData={{
          '1920x1080': {
            'wbBzB^71': {
              theme: {
                Container: {
                  normal: {
                    width: 275,
                    height: 264,
                    background: { color: 'blue' },
                  },
                },
                width: 275,
                height: 267,
              },
              areaId: 'mainPad',
              width: 275,
              height: 267,
              point: [ 943, 437 ],
              widgetId: 'wbBzB^71',
            },
          },
          '800x500': {
            'wbBzB^71': {
              theme: {
                Container: { normal: { width: 275, height: 264 } },
                width: 275,
                height: 267,
              },
              areaId: 'mainPad',
              width: 275,
              height: 267,
              point: [ 313, 103 ],
              widgetId: 'wbBzB^71',
            },
          },
        }}
        sideMenuWidth={this.props.sideMenuWidth}
      >
        <ResponsiveContext.Consumer>
          {context => {
            return (
              <div
                style={{ width: '800px', zIndex: '4000', position: 'relative' }}
              >
                <ResponsiveContext.Consumer>
                  {context => {
                    return (
                      <React.Fragment>
                        <div
                          style={{
                            position: 'absolute',
                            width: 'context.getLayout("wbBzB^71").widthpx',
                            height: 'context.getLayout("wbBzB^71").heightpx',
                            zIndex: '0',
                            left: 'context.getLayout("wbBzB^71").point[0]px',
                            top: 'context.getLayout("wbBzB^71").point[1]px',
                          }}
                        >
                          <Theme
                            config={{
                              'wbBzB^71': themeHandle('wbBzB^71', context, {
                                Container: {
                                  normal: { width: 275, height: 264 },
                                },
                                width: 275,
                                height: 267,
                              }),
                            }}
                          >
                            <Button viewClass="wbBzB^71" />
                          </Theme>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </ResponsiveContext.Consumer>
              </div>
            );
          }}
        </ResponsiveContext.Consumer>
      </DesignResponsive>
    );
  }
}
