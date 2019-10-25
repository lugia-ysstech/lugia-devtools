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

type PointType = "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
type Point = [number, number];

export const pointType2GetCSS: {
  [key: PointType]: (point: Point) => Object
} = {
  leftTop: (point: Point) => {
    const [x, y] = point;
    return { left: `${x}px`, top: `${y}px`, right: "", bottom: "" };
  },
  leftBottom: (point: Point) => {
    const [x, y] = point;
    return { left: `${x}px`, bottom: `${y}px`, right: "", top: "" };
  },
  rightTop: (point: Point) => {
    const [x, y] = point;
    return { right: `${x}px`, top: `${y}px`, left: "", bottom: "" };
  },
  rightBottom: (point: Point) => {
    const [x, y] = point;
    return { right: `${x}px`, bottom: `${y}px`, left: "", top: "" };
  }
};
