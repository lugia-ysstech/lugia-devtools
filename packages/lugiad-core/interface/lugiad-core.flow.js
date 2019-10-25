/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */
declare module '@lugia/lugiad-core' {
  declare type PointType =
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  declare type Point = [number, number];

  declare type LugiaDCoreType = {
    bindHandleEvent: Function,
    themeHandle: Function,
    getData: Function,
    pointType2GetCSS: Object
  };

  declare module.exports: LugiaDCoreType;
}
