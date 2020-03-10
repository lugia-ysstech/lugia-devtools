/**
 *
 * create by guorg
 *
 * @flow
 */
import type { PointType, Point } from "@lugia/lugiad-core";

function bindHandleEvent(e: Object): string {
  if (!e) {
    return;
  }

  if (e.newValue || e.newValue === 0) {
    return e.newValue;
  }

  if (e.value || e.value === 0) {
    return e.value;
  }

  if (e.target && (e.target.value || e.target.value === 0)) {
    return e.target.value;
  }
}

function themeHandle(
  id: string,
  context: Object,
  dTh: Object,
  useSmart: boolean
): Object {
  let cmpTheme = {};
  if (context) {
    const contextTheme = { ...context.getLayout(id).theme };
    cmpTheme = { ...contextTheme };
  } else {
    cmpTheme = { ...dTh };
  }

  if (useSmart && cmpTheme.Container && cmpTheme.Container.normal) {
    cmpTheme.Container.normal.width = "100%";
  }
  return cmpTheme || {};
}

function getData(
  state: Object,
  propsName: string,
  modelName: string,
  fieldName: string
): Object {
  if (!modelName) {
    return {};
  }
  const paths = fieldName.split(".");
  const data = modelName.getState().getIn(paths);
  return {
    [propsName]:
      typeof data !== "object"
        ? data
        : data
        ? data.toJS
          ? data.toJS()
          : data
        : null
  };
}

const getSymbol = (fixType?: "x" | "xw" | "w") =>
  fixType === "x" || fixType === "xw" ? "px" : "%";
const getPoint = (point, percentPoint, fixType?: "x" | "xw" | "w") =>
  fixType === "x" || fixType === "xw" ? point : [percentPoint[0], point[1]];

const pointType2GetCSS: {
  [key: PointType]: (
    pxPoint: Point,
    percentPoint: Point,
    fixType?: "x" | "xw" | "w"
  ) => Object
} = {
  leftTop: (
    pxPoint: Point,
    percentPoint: Point,
    fixType?: "x" | "xw" | "w"
  ): Object => {
    const point = getPoint(pxPoint, percentPoint, fixType);
    const [x, y] = point;
    const symbol = getSymbol(fixType);
    return {
      left: `${x}${symbol}`,
      top: `${pxPoint[1]}px`,
      right: "",
      bottom: ""
    };
  },
  leftBottom: (
    pxPoint: Point,
    percentPoint: Point,
    pointFix: boolean
  ): Object => {
    const point = getPoint(pxPoint, percentPoint, pointFix);
    const [x, y] = point;
    const symbol = getSymbol(pointFix);
    return {
      left: `${x}${symbol}`,
      bottom: `${pxPoint[1]}px`,
      right: "",
      top: ""
    };
  },
  rightTop: (
    pxPoint: Point,
    percentPoint: Point,
    pointFix: boolean
  ): Object => {
    const point = getPoint(pxPoint, percentPoint, pointFix);
    const [x, y] = point;
    const symbol = getSymbol(pointFix);
    return {
      right: `${x}${symbol}`,
      top: `${pxPoint[1]}px`,
      left: "",
      bottom: ""
    };
  },
  rightBottom: (
    pxPoint: Point,
    percentPoint: Point,
    pointFix: boolean
  ): Object => {
    const point = getPoint(pxPoint, percentPoint, pointFix);
    const [x, y] = point;
    const symbol = getSymbol(pointFix);
    return {
      right: `${x}${symbol}`,
      bottom: `${pxPoint[1]}px`,
      left: "",
      top: ""
    };
  }
};

const lugiaDCore = {
  bindHandleEvent,
  themeHandle,
  getData,
  pointType2GetCSS
};

export default lugiaDCore;
