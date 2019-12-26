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
import LugiaDFile from './lugiaDFile';
import LugiaDFileZip from './lugiaDFileZip';
import CopyChildrenData from './CopyChildrenData';

describe('zip.test', () => {
  it('zip', () => {
    const orginal = JSON.parse(JSON.stringify(LayoutFile));
    const file: Object = LayoutFile;
    const zipJSONString = JSON.stringify(zip(file));
    expect(zipJSONString).toEqual(JSON.stringify(LayoutFileZip));
    expect(unZip(zipJSONString)).toEqual({ ...orginal, zip: true });
  });

  it('zip lugiaDFile', () => {
    const meta = JSON.parse(JSON.stringify(LugiaDFile));
    expect(JSON.stringify(LugiaDFileZip)).toEqual(
      JSON.stringify(zip(LugiaDFile))
    );
    expect(
      unZip(JSON.stringify(JSON.parse(JSON.stringify(LugiaDFileZip))))
    ).toEqual(meta);
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
  it('CopyChildrenData', () => {

    expect(zipCopyData(deepClone(unZipCopyData(deepClone(CopyChildrenData))))).toEqual(
      deepClone(CopyChildrenData)
    );
  });
});
