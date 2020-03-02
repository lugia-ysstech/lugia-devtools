/**
 *
 * create by ligx
 *
 * @flow
 */
export const LugiaxDataPrefix = '$__data__';

export function getImportScripts(scripts: Object): string {
  if (!scripts) {
    return '';
  }
  const importCodes = [];

  Object.keys(scripts).forEach((codeName: string): void => {
    const { type = 'Code', code = '' } = scripts[codeName];
    if (!code) {
      return;
    }
    switch (type) {
      case 'Project':
        return importCodes.push(`import __data__${codeName} from ${code}`);
      default:
    }
  });
  return importCodes.join(';');
}
function getScripts(scripts: Object): string {
  if (!scripts) {
    return '';
  }
  const codes = [];
  Object.keys(scripts).forEach((codeName: string) => {
    const { type = 'Code', code = '' } = scripts[codeName];
    if (!code) {
      return;
    }
    switch (type) {
      case 'Code':
        codes.push(
          `const ${LugiaxDataPrefix}${codeName} = new Function('param', \`${code}\`);`
        );
        return;
      default:
    }
  });
  return codes.join('');
}
export default function(lugiax: Object): string {
  const { pageData } = lugiax;

  if (!pageData) {
    return '';
  }
  const { model } = pageData;
  if (!model) {
    return '';
  }
  const { state = {}, scripts } = pageData;

  return `const ${LugiaxDataPrefix} = LugiaxData.createData({
    model: '${model}',
    state: ${JSON.stringify(state)},
  });
  ${getScripts(scripts)}
 `;
}
