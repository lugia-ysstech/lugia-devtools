/**
 *
 * create by guorg
 *
 * @flow
 */

import {
  getTargetModal,
  getModelCode,
  createHeader,
  getLugiaDCoreCode,
  createLugiaDCoreCode,
  hasResponsive,
  getResponsiveCode,
} from '../src/header';

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

  it('createLugiaDCoreCode toMatchSnapshot', () => {
    const packageNames = [ 'ThemeHandle', 'bindHandleEvent' ];
    expect(createLugiaDCoreCode(packageNames)).toMatchSnapshot();
  });

  it('hasResponsive toMatchSnapshot', () => {
    const spaceLayoutInfos = {
      mode2Config: {},
      mode2LayoutData: {},
    };
    const layoutInfos = {
      mode2Config: {
        '1920x1080': {},
        '1080x960': {},
      },
      mode2LayoutData: {
        '1920x1080': {},
        '1080x960': {},
      },
    };
    expect(hasResponsive(spaceLayoutInfos)).toBe(false);
    expect(hasResponsive(layoutInfos)).toBe(true);
  });

  it('getResponsiveCode toMatchSnapshot', () => {
    const spaceLayoutInfos = {
      mode2Config: {},
      mode2LayoutData: {},
    };
    const layoutInfos = {
      mode2Config: {
        '1920x1080': {},
        '1080x960': {},
      },
      mode2LayoutData: {
        '1920x1080': {},
        '1080x960': {},
      },
    };
    expect(getResponsiveCode(spaceLayoutInfos)).toMatchSnapshot();
    expect(getResponsiveCode(layoutInfos)).toMatchSnapshot();
  });

  it('getLugiaDCoreCode toMatchSnapshot', () => {
    const spaceLugiax = {
      widgetId2PropsName2BindInfo: {},
      widgetId2EventName2MutationInfo: {},
    };
    const lugiaxBind = {
      widgetId2PropsName2BindInfo: {
        onChange: {},
      },
      widgetId2EventName2MutationInfo: {},
    };
    const lugiaxMutationKeys = {
      widgetId2PropsName2BindInfo: {},
      widgetId2EventName2MutationInfo: {
        hello: {
          propsName: 'value',
        },
      },
    };
    expect(getLugiaDCoreCode(spaceLugiax)).toMatchSnapshot();
    expect(getLugiaDCoreCode(lugiaxBind)).toMatchSnapshot();
    expect(getLugiaDCoreCode(lugiaxMutationKeys)).toMatchSnapshot();
  });
});
