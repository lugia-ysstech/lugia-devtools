/*
 *
 * create by guorg
 *
 * @flow
 */
export function createThemeCode(
  widgetId2ThemeInfo: ?Object,
  id: string
): Object {
  let labelStart = '';
  let labelEnd = '';
  let viewClass = '';
  let configString = '';
  if (!widgetId2ThemeInfo) {
    return { labelStart, labelEnd, viewClass };
  }
  if (widgetId2ThemeInfo && id) {
    const theme = widgetId2ThemeInfo[id];
    if (theme) {
      const { config, configStr } = getThemeConfig(theme, id);
      labelStart = `<Theme config={{${config}}}>`;
      configString = configStr;
      labelEnd = '</Theme>';
      viewClass = id;
    }
  }

  return { labelStart, labelEnd, viewClass, configString };
}

export function getThemeConfig(theme: Object, id: string): string {
  const themes = Object.keys(theme);
  let config = '';
  let configStr = '';
  if (themes && themes.length > 0) {
    themes.forEach(
      (item: Object): Object => {
        configStr = `${configStr} ${item}: ${theme[item]},`;
      }
    );
    config = `'${id}' :{ ${configStr} }`;
  }
  return { config, configStr };
}
