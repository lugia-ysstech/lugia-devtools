/**
 *
 * create by guorg
 *
 * @flow
 */

import { getTargetModal, getModelCode, createHeader } from '../src/header';

describe('conversion header ->', () => {
  const target = {
    a: {
      data: { modelName: 'user' },
    },
    b: {
      data: { modelName: 'login' },
    },
  };
  it('getTargetModal', () => {
    const result = getTargetModal(target);
    expect(result).toEqual([ 'user', 'login' ]);

    const errResult = getTargetModal();
    expect(errResult).toEqual([]);

    const errorResult = getTargetModal({});
    expect(errorResult).toEqual([]);
  });

  it('getModelCode', () => {
    const errResult = getModelCode();
    expect(errResult).toBe('');

    const spaceLugiax = {
      widgetId2PropsName2BindInfo: {},
      widgetId2EventName2MutationInfo: {},
    };
    const spaceResult = getModelCode(spaceLugiax);
    expect(spaceResult).toBe('');

    const lugiax = {
      widgetId2PropsName2BindInfo: {
        ...target,
      },
      widgetId2EventName2MutationInfo: {},
    };
    const result = getModelCode(lugiax);
    expect(result).toBe(
      "import user from '../models/user';import login from '../models/login';"
    );
  });

  it('createHeader', () => {
    const mainDependencies = [
      { module: '@lugia/lugia-web', widgetName: 'Table' },
      { module: '@lugia/lugia-web-html', widgetName: 'label' },
    ];
    const widgetId2Component = {};
    const {
      packages: spacePakage,
      styledComponentCode: spaceStyled,
    } = createHeader([], widgetId2Component);
    expect(spaceStyled).toBe('');
    expect(spacePakage).toMatchSnapshot();
    expect(widgetId2Component).toEqual({});

    const { packages, styledComponentCode } = createHeader(
      mainDependencies,
      widgetId2Component
    );
    expect(packages).toMatchSnapshot();
    expect(styledComponentCode).toBe(
      'const Label = styled.div`font-size: 12px;`;'
    );
    expect(widgetId2Component).toEqual({ label: 'Label' });
  });

  it('createHeader childrenComponent', () => {
    const mainDependencies = [
      { module: '@lugia/lugia-web', widgetName: 'Table' },
      { module: '@lugia/lugia-web', widgetName: 'Checkbox' },
      { module: '@lugia/lugia-web', widgetName: 'Checkbox' },
      { module: '@lugia/lugia-web', widgetName: 'Checkbox.Group' },
      { module: '@lugia/lugia-web', widgetName: 'Checkbox.Button' },
      { module: '@lugia/lugia-web', widgetName: 'Table' },
      { module: '@lugia/lugia-web-html', widgetName: 'label' },
    ];
    const widgetId2Component = {};
    const { packages, styledComponentCode } = createHeader(
      mainDependencies,
      widgetId2Component
    );
    expect(packages).toMatchSnapshot();
    expect(styledComponentCode).toBe(
      'const Label = styled.div`font-size: 12px;`;'
    );
    expect(widgetId2Component).toEqual({ label: 'Label' });
  });

  it('createHeader toMatchSnapshot', () => {
    const widgetId2Component = {};
    expect(createHeader([], widgetId2Component)).toMatchSnapshot();
  });
});
