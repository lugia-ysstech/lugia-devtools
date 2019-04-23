/**
 *
 * create by guorg
 *
 * @flow
 */
import { widgetIdInLugiax } from '../lib/widgetIdInLugiax';
import chai from 'chai';

const { expect } = chai;

describe('conversion widgetIdInLugiax ->', () => {
  const target = {
    a: {
      data: { modelName: 'user', fieldName: 'data', propsName: 'data' },
      user: {
        modelName: 'user',
        bindType: 'bind',
        fieldName: 'data',
        propsName: 'data',
      },
    },
    b: {
      data: { modelName: 'login' },
    },
  };
  const lugiax = {
    widgetId2PropsName2BindInfo: {
      ...target,
    },
    widgetId2EventName2MutationInfo: {},
  };
  it('widgetIdInLugiax', () => {
    const widgetId = 'a';
    const componentName = 'Component';
    const index = 1;

    const result = widgetIdInLugiax(undefined, lugiax, componentName, index);
    expect(result).toBe(null);

    const errRes = widgetIdInLugiax(widgetId, undefined, componentName, index);
    expect(errRes).toBe(null);

    const errorRes = widgetIdInLugiax(widgetId, lugiax, undefined, index);
    expect(errorRes).toBe(null);

    const defaultCode = `const User1 = bindTo(
      user,
      {
        'data': 'data'
      },
      {
        onChange: { ['data'](e){ return bindHandleEvent(e); } }
      }
    )(Component);const ConnectUser11 = connect(
    [user],
    state=>{ return {
      ... getData(state, 'data', 'user', 'data'),
    }},
    mutations => { return {}}
  )(User1);`;
    const { inLugiax, lugiaxCode, componentName: newComponentName } =
      widgetIdInLugiax(widgetId, lugiax, componentName, index) || {};
    expect(inLugiax).toBeTruthy();
    expect(lugiaxCode).toBe(defaultCode);
    expect(newComponentName).toBe('ConnectUser11');
  });
});
