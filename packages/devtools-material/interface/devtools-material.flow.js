/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */
declare module '@lugia/devtools-material' {
  declare type OutFileType = {
    outFile: string
  };
  declare type ExtendParam = OutFileType & {
    outExtend: string,
    max: number
  };

  declare type InvalidType = string[];
  declare type ThemeMetaParams = {
    targetPath: string,
    invalid: InvalidType,
    option: OutFileType
  };
  declare type DesignInfo = {
    createDesignInfo(
      targetPath: string,
      invalid: InvalidType,
      opt: ExtendParam
    ): string,
    createThemeMeta(params: ThemeMetaParams): void
  };

  declare module.exports: DesignInfo;
}
