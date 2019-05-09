/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */

declare module '@lugia/devtools-core' {
  declare type ZipData = {
    unZipCopyData(outCopyData: Object): Object,
    zipCopyData(outCopyData: Object): Object
  };

  declare module.exports: ZipData;
}
