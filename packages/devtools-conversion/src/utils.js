// @flow
export function camelNamed(_str: any): string {
  if (typeof _str === 'string') {
    const str = _str[0].toUpperCase() + _str.substr(1);
    return str;
  }
  return 'Label';
}
export function recursiveChildren(target: ?(Object[]), outResult: string[]) {
  if (!target || target.length < 0) {
    return;
  }
  target.forEach((item: Object) => {
    const { children, widgetId } = item;
    outResult.unshift(widgetId);
    children && recursiveChildren(children, outResult);
  });
}
