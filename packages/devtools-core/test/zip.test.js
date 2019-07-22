/**
 *
 * create by ligx
 *
 * @flow
 */

import { unZip, unZipCopyData, zip, zipCopyData } from '../src';
import LayoutFile from './LayoutFile';
import LayoutFileZip from './LayoutFileZip';
import CopyDataZip from './copydata_zip';
import CopyData from './copydata';

describe('zip.test', () => {
  it('zip', () => {
    const orginal = JSON.parse(JSON.stringify(LayoutFile));
    const file: Object = LayoutFile;
    const zipJSONString = JSON.stringify(zip(file));
    expect(zipJSONString).toEqual(JSON.stringify(LayoutFileZip));
    expect(unZip(zipJSONString)).toEqual({ ...orginal, zip: true });
  });

  function deepClone(target: Object): Object {
    return JSON.parse(JSON.stringify(target));
  }
  it('copydata', () => {
    expect(unZipCopyData(deepClone(CopyDataZip))).toEqual(deepClone(CopyData));
    expect(zipCopyData(deepClone(CopyData))).toEqual(deepClone(CopyDataZip));

    expect(unZipCopyData(deepClone(zipCopyData(deepClone(CopyData))))).toEqual(
      deepClone(CopyData)
    );
  });
});
