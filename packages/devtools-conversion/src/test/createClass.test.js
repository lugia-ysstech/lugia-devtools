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
} from '../createClass';

const data = [
  {
    id: 1,
    children: [
      {
        id: 11,
        children: [{ id: 111, }, { id: 112, },],
      },
      {
        id: 12,
        children: [{ id: 121, }, { id: 122, },],
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        id: 21,
        children: [{ id: 211, },],
      },
    ],
  },
];
describe('conversion createClass ->', () => {
  const space = '';
  const defaultLayerCode = `${space}<div style={{position: 'absolute',width: '72px',height: '21px',zIndex: '4000', left: '92px', top: '67px'}}><Theme config={{'aaa' :{  width: 100, height: 100, }}}><ConnectLabel10  viewClass="aaa" children={'高级表单'} value={'高级表单'} fontSize={ 18 } color={'#50575d'} /></Theme></div>`;
  const defaultBindCode = `const ConnectLabel10 = connect(
    [user],
    state=>{ return {
      ... getData(state, 'data', 'user', 'data'),
    }},
    mutations => { return {}}
  )(Label);`;
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
      point: [92, 67,],
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
    expect(res).toEqual([211, 21, 2, 122, 121, 12, 112, 111, 11, 1,]);
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
    const widgetId2Component = { label: 'Label', };
    const { layerCode, layerBindCode, } = createLayerComponent(
      layers,
      id2WidgetInfo,
      lugiax,
      themes,
      index,
      widgetId2Component
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
      widgetId2Component
    );
    expect(newLayerCode).toMatchSnapshot();
    expect(spaceLayerBindCode).toMatchSnapshot();
  });

  it('getComponentProps', () => {
    const props = { data: {}, type: 'a', };
    const errRes = getComponentProps();
    expect(errRes).toBe('');

    const spaceRes = getComponentProps({});
    expect(spaceRes).toBe('');

    const res = getComponentProps(props);
    expect(res).toBe("data={ {} } type={'a'}");
  });

  it('createTargetContainer', () => {
    const TargetContainer = { widgetName: 'Card', };
    const {
      containerStart: errContainerStart,
      containerEnd: errContainerEnd,
    } = createTargetContainer();
    expect(errContainerStart).toBe('');
    expect(errContainerEnd).toBe('');

    const { containerStart, containerEnd, } = createTargetContainer(
      TargetContainer
    );
    expect(containerStart).toBe('<Card ');
    expect(containerEnd).toBe('</Card>');
  });

  it('handlePropsType', () => {
    const objRes = handlePropsType({ a: 1, });
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
