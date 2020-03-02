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
  getLugiadCoreCode,
  createLugiadCoreCode,
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


  it('getModelCode widgetId2EventName2MutationInfo ', () => {
    const lugiax = {
      pageData: {
        dependenciesModels: [
          'hello',
          'login',
          'modelAbc',
          'modelAbcd',
          'modelAbcdf',
        ],
      },
      widgetId2PropsName2BindInfo: {
        ...target,
      },
      page2mutation: {
        mount: { modelName: 'login', mutationName: 'click' },
        did: { modelName: 'modelAbc', mutationName: 'click' },

      },
      widgetId2EventName2MutationInfo: {
        'wb67fbbc00-17d3-11e9-bb21-754a2cde60630': {
          onClick: {
            modelName: 'hello',
            eventName: 'onClick',
            mutationName: 'login',
          },
          onChange: {
            modelName: 'login',
            eventName: 'onClick',
            mutationName: 'login',
          },
        },
      },
    };
    const result = getModelCode(lugiax);
    expect(result.split(';')).toEqual(
      "import user from '../models/user';import login from '../models/login';import hello from '../models/hello';import modelAbc from '../models/modelAbc';import modelAbcd from '../models/modelAbcd';import modelAbcdf from '../models/modelAbcdf';".split(';')
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

  it('createLugiadCoreCode toMatchSnapshot', () => {
    const packageNames = [ 'ThemeHandle', 'bindHandleEvent' ];
    expect(createLugiadCoreCode(packageNames)).toMatchSnapshot();
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

  it('getLugiadCoreCode toMatchSnapshot', () => {
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
    expect(getLugiadCoreCode(spaceLugiax)).toMatchSnapshot();
    expect(getLugiadCoreCode(lugiaxBind)).toMatchSnapshot();
    expect(getLugiadCoreCode(lugiaxMutationKeys)).toMatchSnapshot();
  });
});
