/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */
declare module '@lugia/devtools-conversion' {
  declare type HeaderType = {
    packages: string,
    styledComponentCode: string
  };

  declare type ConversionType = {
    conversion(page: Object): string
  };

  declare module.exports: ConversionType;
}
