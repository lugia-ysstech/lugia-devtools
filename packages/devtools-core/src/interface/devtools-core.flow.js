/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */

declare module '@lugia/devtools-core' {
  declare type Rectangle = SizeType & {
    id: string,
    point: Point,
    widgetId?: string
  };

  declare type Layer = Rectangle & {
    zIndex: number,
    rulerIndex?: number
  };

  declare type WidgetUnique = {
    module: string,
    widgetName: string,
    version: string
  };

  declare type PolarBearFile = {
    backgroudColor?: string,
    point: Point,
    width: number,
    height: number,
    index: number,
    zIndex: number,
    type: AreaType,
    scale: number,
    layers: Layer[],
    idSeq: number,
    id2WidgetInfo: Id2WidgetInfo,
    id: string,
    lastIndex: number,
    fatherId: ?string,
    widgetId: ?string,
    children?: ChildInfo[],
    group: boolean
  };
  declare type AreaType = "MainPad" | "ChildPad" | "ForkPad";
  declare type ChildInfo = {
    path: string[],
    widgetId: string,
    children?: ChildInfo[]
  };
  declare type Id2WidgetInfo = { [key: string]: WidgetInfo };
  declare type WidgetInfo = WidgetUnique & {
    factory: Function,
    props: Object,
    isGroup?: boolean,
    id?: string,
    binds?: PropsName2BindInfo,
    mutations?: EventName2MutationInfo,
    childAreaId?: string
  };

  declare type WidgetId2ChildPad = { [widgetId: string]: PolarBearFile };
  declare type AreaId2ChildPadIndexString = { [areaId: string]: string };
  declare type BindInfo = {
    propsName: string,
    modelName: string,
    fieldName: string,
    bindType?: BindType
  };
  declare type BindType = "connect" | "bind";
  declare type PropsName2BindInfo = {
    [propName: string]: BindInfo
  };
  declare type WidgetId2PropsName2BindInfo = {
    [widgetId: string]: PropsName2BindInfo
  };
  declare type MutationInfo = {
    eventName: string,
    modelName: string,
    mutationName: string,
    translate?: Function
  };
  declare type EventName2MutationInfo = {
    [propName: string]: MutationInfo
  };
  declare type WidgetId2EventName2MutationInfo = {
    [widgetId: string]: EventName2MutationInfo
  };
  declare type LugiaxInfo = {
    widgetId2PropsName2BindInfo: WidgetId2PropsName2BindInfo,
    widgetId2EventName2MutationInfo: WidgetId2EventName2MutationInfo
  };
  declare type WidgetId2ThemeInfo = {
    [widgetId: string]: Object
  };
  declare type ThemeInfo = {
    widgetId2ThemeInfo: WidgetId2ThemeInfo
  };
  declare type LockedType = "Normal" | "Deep";
  declare type Locked = { type: LockedType };
  declare type WidgetId2Locked = { [widgetId: string]: Locked };
  declare type LayoutModeData = {
    [mode: string]: LayoutData
  };
  declare type LayoutData = {
    [widgetId: string]: RangeInfo
  };
  declare type RangeInfo = {
    areaId: string,
    widgetId: string,
    point: Point,
    width: number,
    height: number
  };
  declare type Mode2Config = { [mode: string]: ModeInnerConfig };
  declare type ModeInnerConfig = {
    mainPadSize: SizeType,
    widthRange: WidthRange,
    scale?: number,
    forkPadPoint?: Point,
    mainPadPoint?: Point
  };
  declare type SizeType = {
    width: number,
    height: number
  };
  declare type WidthRange = [number, number];
  declare type Point = [number, number];

  declare type LugiaDFile = {
    type: "PolarBear" | "Panda",
    forkDependencies: WidgetUnique[],
    mainDependencies: WidgetUnique[],
    zip?: boolean,
    widgetId2ChildPad: WidgetId2ChildPad,

    forkPad: PolarBearFile,
    mainPad: PolarBearFile,
    areaId2ChildPadIndexString: AreaId2ChildPadIndexString,
    lugiax: LugiaxInfo,
    themes: ThemeInfo,
    widgetId2Locked: WidgetId2Locked,
    layoutInfos: { mode2LayoutData: LayoutModeData, mode2Config: Mode2Config }
  };

  declare type ZipData = {
    zip(outLugiadFile: LugiaDFile): Object,
    unZip(fileJSON: string): Object,
    unZipCopyData(outCopyData: Object): Object,
    zipCopyData(outCopyData: Object): Object
  };

  declare module.exports: ZipData;
}
