/**
 *
 * create by guorg
 *
 * @flow
 */
import { createThemeCode, getThemeConfig, } from '../theme';

describe('conversion createClass ->', () => {
  it('createThemeCode', () => {
    const widgetId2ThemeInfo = { a: { width: 100, height: 100, }, };
    const widgetId = 'a';

    const {
      labelStart: errLabelStart,
      labelEnd: errLabelEnd,
      viewClass: errViewClass,
    } = createThemeCode(undefined, widgetId);
    expect(errLabelStart).toBe('');
    expect(errLabelEnd).toBe('');
    expect(errViewClass).toBe('');

    const { labelStart, labelEnd, viewClass, } = createThemeCode(
      widgetId2ThemeInfo,
      widgetId
    );
    expect(labelStart).toBe(
      "<Theme config={{'a' :{  width: 100, height: 100, }}}>"
    );
    expect(labelEnd).toBe('</Theme>');
    expect(viewClass).toBe('a');
  });

  it('getThemeConfig', () => {
    const theme = { width: 100, height: 100, };
    const widgetId = 'a';

    const errRes = getThemeConfig({}, widgetId);
    expect(errRes).toEqual({ config: '', configStr: '', });

    const res = getThemeConfig(theme, widgetId);
    expect(res).toEqual({
      config: "'a' :{  width: 100, height: 100, }",
      configStr: ' width: 100, height: 100,',
    });
  });
});
