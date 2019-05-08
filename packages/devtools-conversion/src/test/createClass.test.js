/**
 *
 * create by guorg
 *
 * @flow
 */
import {
  createExpantWidgetid,
  createClassCode,
  createLayerComponent,
  getComponentProps,
  createTargetContainer,
  handlePropsType,
  createComponent,
} from '../lib/createClass';

const data = [
  {
    Widgetid: 1,
    children: [
      {
        Widgetid: 11,
        children: [{ Widgetid: 111 }, { Widgetid: 112 }],
      },
      {
        Widgetid: 12,
        children: [{ Widgetid: 121 }, { Widgetid: 122 }],
      },
    ],
  },
  {
    Widgetid: 2,
    children: [
      {
        Widgetid: 21,
        children: [{ Widgetid: 211 }],
      },
    ],
  },
];
describe('conversion createClass ->', () => {
  const lugiax = {
    widgetId2PropsName2BindInfo: {
      aaa: {
        data: {
          modelName: 'user',
          fieldName: 'data',
          propsName: 'data',
        },
      },
    },
    widgetId2EventName2MutationInfo: {},
  };
  const themes = {
    widgetId2ThemeInfo: {
      aaa: {
        width: 100,
        height: 100,
      },
    },
  };
  const layers = [
    {
      zIndex: 4000,
      width: 72,
      height: 21,
      point: [ 92, 67 ],
      id: 'aaa',
    },
  ];
  const id2WidgetInfo = {
    aaa: {
      widgetName: 'label',
      module: '@lugia/lugia-web-html',
      version: '1.0.0',
      props: {
        children: '高级表单',
        value: '高级表单',
        fontSize: 18,
        color: '#50575d',
      },
    },
  };
  const childPadInfo = {
    aaa: {
      layers,
      id2WidgetInfo,
    },
  };
  it('createExpantWidgetid', () => {
    const spaceRes = createExpantWidgetid();
    expect(spaceRes).toEqual([]);

    const errRes = createExpantWidgetid([]);
    expect(errRes).toEqual([]);

    const res = createExpantWidgetid(data);
    expect(res).toEqual([ 211, 21, 2, 122, 121, 12, 112, 111, 11, 1 ]);
  });

  it('createClassCode', () => {
    const widgetId = 'aaa';
    expect(
      createClassCode(widgetId, childPadInfo, lugiax, themes, 1, {
        label: 'Label',
      })
    ).toMatchSnapshot();

    const spaceRes = createClassCode(widgetId, {}, lugiax, themes, 1, {
      label: 'Label',
    });
    expect(spaceRes).toBe('');
  });

  it('createLayerComponent', () => {
    const spaceLugiax = {
      widgetId2PropsName2BindInfo: {},
      widgetId2EventName2MutationInfo: {},
    };

    const index = 1;
    const widgetId2Component = { label: 'Label' };
    const { layerCode, layerBindCode } = createLayerComponent(
      layers,
      id2WidgetInfo,
      lugiax,
      themes,
      index,
      widgetId2Component,
      false
    );

    expect(layerCode).toMatchSnapshot();
    expect(layerBindCode).toMatchSnapshot();

    const {
      layerCode: newLayerCode,
      layerBindCode: spaceLayerBindCode,
    } = createLayerComponent(
      layers,
      id2WidgetInfo,
      spaceLugiax,
      themes,
      index,
      widgetId2Component,
      false
    );
    expect(newLayerCode).toMatchSnapshot();
    expect(spaceLayerBindCode).toMatchSnapshot();
  });

  it('getComponentProps', () => {
    const props = { data: {}, type: 'a' };
    const errRes = getComponentProps();
    expect(errRes).toBe('');

    const spaceRes = getComponentProps({});
    expect(spaceRes).toBe('');

    const res = getComponentProps(props);
    expect(res).toBe("data={ {} } type={'a'}");
  });

  it('createTargetContainer', () => {
    const TargetContainer = { widgetName: 'Card' };
    const {
      containerStart: errContainerStart,
      containerEnd: errContainerEnd,
    } = createTargetContainer();
    expect(errContainerStart).toBe('');
    expect(errContainerEnd).toBe('');

    const { containerStart, containerEnd } = createTargetContainer(
      TargetContainer
    );
    expect(containerStart).toBe('<Card ');
    expect(containerEnd).toBe('</Card>');
  });

  it('handlePropsType', () => {
    const objRes = handlePropsType({ a: 1 });
    expect(objRes).toBe('{ {"a":1} }');

    const numberRes = handlePropsType(2);
    expect(numberRes).toBe('{ 2 }');

    const res = handlePropsType('aaa');
    expect(res).toBe("{'aaa'}");
  });

  it('createComponent', () => {
    const errRes = createComponent(undefined, {}, {}, {}, {});
    expect(errRes).toBe('');

    const errorRes = createComponent([], {}, {}, {}, {});
    expect(errorRes).toBe('');
  });
});
