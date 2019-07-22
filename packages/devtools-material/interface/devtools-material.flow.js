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
  declare type DesignInfo = {
    createDesignInfo(
      targetPath: string,
      Invalid: string[],
      opt: ExtendParam
    ): string
  };

  declare module.exports: DesignInfo;
}
