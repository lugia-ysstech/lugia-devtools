/**
 *
 * create by guorg
 *
 * @flow
 */
export function camelNamed(_str: any): string {
  if (typeof _str === 'string') {
    const str = _str[0].toUpperCase() + _str.substr(1);
    return str;
  }
  return 'Label';
}
export function recursiveChildren(
  target: ?(Object[]),
  outResult: string[]
): void {
  if (!target || target.length < 1) {
    return;
  }
  target.forEach(item => {
    const { children, id, } = item;
    outResult.unshift(id);
    children && recursiveChildren(children, outResult);
  });
}
