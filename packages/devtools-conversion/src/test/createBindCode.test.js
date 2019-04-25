/**
 *
 * create by guorg
 *
 * @flow
 */
import { createBindCode, createConnectCode } from '../lib/createBindCode';

describe('conversion createBindCode ->', () => {
  it('createBindCode', () => {
    const bindItem = [
      { modelName: 'user', fieldName: 'data', propsName: 'data' },
    ];
    const componentName = 'Component';
    const mutationInfo = [
      { eventName: 'onChange', modelName: 'user', mutationName: 'changeName' },
    ];
    const index = 1;
    const {
      bindCode: errBindCode,
      componentName: errComponentName,
    } = createBindCode([], componentName, [], index);
    expect(errBindCode).toBe('');
    expect(errComponentName).toBe(componentName);

    const DefaultCode = `const User1 = bindTo(
      user,
      {
        'data': 'data'
      },
      {
        onChange: { ['data'](e){ return bindHandleEvent(e); } }
      }
    )(Component);`;
    const { bindCode, componentName: bindComponentName } = createBindCode(
      bindItem,
      componentName,
      [],
      index
    );
    expect(bindCode).toBe(DefaultCode);
    expect(bindComponentName).toBe('User1');

    const NewDefaultCode = `const User1 = bindTo(
      user,
      {
        'data': 'data'
      },
      {
        onChange: { ['data'](e){ return bindHandleEvent(e); } }
      }
    )(Component);`;
    const {
      bindCode: newBindCode,
      componentName: newBindComponentName,
    } = createBindCode(bindItem, componentName, mutationInfo, index);
    expect(newBindCode).toBe(NewDefaultCode);
    expect(newBindComponentName).toBe('User1');
  });

  it('createConnectCode', () => {
    const connectItem = [
      { modelName: 'user', fieldName: 'data', propsName: 'data' },
    ];
    const componentName = 'Component';
    const mutationInfo = [
      { eventName: 'onChange', modelName: 'user', mutationName: 'changeName' },
    ];
    const index = 1;
    const defaultConnectCode = `const ConnectComponent1 = connect(
    [user],
    state=>{ return {}},
    mutations => { return {onChange: (event) => mutations.user.changeName({eventArgs: {...event}}),}}
  )(Component);`;
    const {
      connectCode: errConnectCode,
      componentName: errComponentName,
    } = createConnectCode(undefined, componentName, mutationInfo, index);
    expect(errConnectCode).toBe(defaultConnectCode);
    expect(errComponentName).toBe('ConnectComponent1');

    const defaultCode = `const ConnectComponent1 = connect(
    [user],
    state=>{ return {
      ... getData(state, 'data', 'user', 'data'),
    }},
    mutations => { return {onChange: (event) => mutations.user.changeName({eventArgs: {...event}}),}}
  )(Component);`;
    const {
      connectCode,
      componentName: connectComponentName,
    } = createConnectCode(connectItem, componentName, mutationInfo, index);
    expect(connectCode).toBe(defaultCode);
    expect(connectComponentName).toBe('ConnectComponent1');
  });
});
