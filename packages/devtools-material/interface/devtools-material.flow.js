/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */
declare module '@lugia/devtools-material' {
  declare type ExtendParam = {
    outExtend: string,
    max: number,
    outFile: string
  };
  declare type InvalidType = string[];
  declare type DesignInfo = {
    createDesignInfo(
      targetPath: string,
      invalid: InvalidType,
      opt: ExtendParam
    ): string,
    createThemeMeta(targetPath: string, invalid: InvalidType): void
  };

  declare type ThemeMetaParams = {
    targetPath: string,
    invalid: InvalidType,
    opt: Object
  };

  declare module.exports: DesignInfo;
}
