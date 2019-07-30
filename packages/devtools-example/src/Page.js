import React from 'react';
import styled from 'styled-components';
import lugiax, { bindTo, connect, bind } from '@lugia/lugiax';
import { deepMerge } from '@lugia/object-utils';
import { Theme, DesignResponsive } from '@lugia/lugia-web';
import { Alert } from '@lugia/lugia-web';
import { Button } from '@lugia/lugia-web';
import { Avatar } from '@lugia/lugia-web';
const ResponsiveContext = DesignResponsive.ResponsiveContext;
const getData = (state, propsName, modelName, fieldName) => {
  if (!modelName) {
    return {};
  }
  const paths = fieldName.split('.');
  const data = modelName.getState().getIn(paths);
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
          '1200x1080': {
            mainPadSize: { width: 1200, height: 1080 },
            widthRange: [ 751, 50000 ],
            scale: 0.79,
          },
          '750x1334': {
            mainPadSize: { width: 750, height: 1334 },
            widthRange: [ 0, 750 ],
          },
        }}
        mode2LayoutData={{
          '1200x1080': {
            'wbm@my71': {
              theme: {},
              areaId: 'mainPad',
              width: 80,
              height: 38,
              point: [ 277, 238 ],
              widgetId: 'wbm@my71',
            },
            'wb0(E%72': {
              theme: {},
              areaId: 'mainPad',
              width: 104,
              height: 32,
              point: [ 414, 256 ],
              widgetId: 'wb0(E%72',
            },
            'wbGw7)71': {
              theme: {},
              areaId: 'mainPad',
              width: 32,
              height: 32,
              point: [ 235, 348 ],
              widgetId: 'wbGw7)71',
            },
            'wbWc^G41': {
              theme: {},
              areaId: 'mainPad',
              width: 32,
              height: 32,
              point: [ 486, 139 ],
              widgetId: 'wbWc^G41',
            },
          },
          '750x1334': {
            'wbm@my71': {
              theme: {},
              areaId: 'mainPad',
              width: 80,
              height: 38,
              point: [ 277, 238 ],
              widgetId: 'wbm@my71',
            },
            'wb0(E%72': {
              theme: {},
              areaId: 'mainPad',
              width: 104,
              height: 32,
              point: [ 414, 256 ],
              widgetId: 'wb0(E%72',
            },
            'wbGw7)71': {
              theme: {},
              areaId: 'mainPad',
              width: 32,
              height: 32,
              point: [ 235, 348 ],
              widgetId: 'wbGw7)71',
            },
          },
        }}
        sideMenuWidth={this.props.sideMenuWidth}
      >
        <ResponsiveContext.Consumer>
          {context => {
            return (
              <div
                style={{
                  width: '1200px',
                  zIndex: '4000',
                  position: 'relative',
                }}
              >
                <ResponsiveContext.Consumer>
                  {context => {
                    return (
                      <React.Fragment>
                        <div
                          style={{
                            position: 'absolute',
                            width: context.getLayout('wbm@my71').width + 'px',
                            height: context.getLayout('wbm@my71').height + 'px',
                            zIndex: '0',
                            left: context.getLayout('wbm@my71').point[0] + 'px',
                            top: context.getLayout('wbm@my71').point[1] + 'px',
                          }}
                        >
                          <Theme
                            config={{
                              'wbm@my71': themeHandle('wbm@my71', context, {}),
                            }}
                          >
                            <Alert closable="" showIcon="" type="" />
                          </Theme>
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            width: context.getLayout('wb0(E%72').width + 'px',
                            height: context.getLayout('wb0(E%72').height + 'px',
                            zIndex: '0',
                            left: context.getLayout('wb0(E%72').point[0] + 'px',
                            top: context.getLayout('wb0(E%72').point[1] + 'px',
                          }}
                        >
                          <Theme
                            config={{
                              'wb0(E%72': themeHandle('wb0(E%72', context, {}),
                            }}
                          >
                            <Button
                              block=""
                              disabled=""
                              icon={'lugia-icon-logo_lugia'}
                              plain={'true'}
                              shape={'default'}
                              size={'default'}
                              text={'Button'}
                              type={'primary'}
                            />
                          </Theme>
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            width: context.getLayout('wbGw7)71').width + 'px',
                            height: context.getLayout('wbGw7)71').height + 'px',
                            zIndex: '0',
                            left: context.getLayout('wbGw7)71').point[0] + 'px',
                            top: context.getLayout('wbGw7)71').point[1] + 'px',
                          }}
                        >
                          <Theme
                            config={{
                              'wbGw7)71': themeHandle('wbGw7)71', context, {}),
                            }}
                          >
                            <Avatar
                              size={'default'}
                              name={'Lugia'}
                              icon={'lugia-icon-financial_user'}
                              src=""
                              shape={'circle'}
                            />
                          </Theme>
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            width: context.getLayout('wbWc^G41').width + 'px',
                            height: context.getLayout('wbWc^G41').height + 'px',
                            zIndex: '0',
                            left: context.getLayout('wbWc^G41').point[0] + 'px',
                            top: context.getLayout('wbWc^G41').point[1] + 'px',
                          }}
                        >
                          <Theme
                            config={{
                              'wbWc^G41': themeHandle('wbWc^G41', context, {}),
                            }}
                          >
                            <Avatar
                              size={'default'}
                              name={'Lugia'}
                              icon={'lugia-icon-financial_user'}
                              src=""
                              shape={'circle'}
                            />
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
