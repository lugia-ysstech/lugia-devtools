/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */

declare module '@lugia/devtools-core' {
  declare type ZipData = {
    zip(outLugiadFile: LugiaDFile): Object,
    unZip(fileJSON: string): Object,
    unZipObject(fileJSON: string): Object,
    zipObject(fileJSON: string): Object,
    unZipCopyData(outCopyData: Object): Object,
    zipCopyData(outCopyData: Object): Object
  };

  declare module.exports: ZipData;
}
