/**
 *
 * create by guorg
 *
 * @flow
 */
import createLugiaxData, { getImportScripts } from '../src/createLugiaxData';

describe('conversion createLugiaxData. ->', () => {
  it('createLugiaxData pageData is empty', () => {
    expect(createLugiaxData({})).toBe('');
  });
  it('createLugiaxData pageData model is empty str', () => {
    expect(
      createLugiaxData({
        model: '',
      })
    ).toBe('');
  });
  it('createLugiaxData pageData model hello state', () => {
    expect(
      createLugiaxData({
        pageData: {
          model: 'hello',
        },
      })
    ).toMatchSnapshot();
  });
  it('createLugiaxData pageData model hello state {num, str, bool, date}', () => {
    expect(
      createLugiaxData({
        pageData: {
          model: 'hello',
          state: { num: 1, str: 'abc', bool: true },
        },
      })
    ).toMatchSnapshot();
  });
  it('createLugiaxData pageData model hello state {num, str, bool, date} scriptes', () => {
    expect(
      createLugiaxData({
        pageData: {
          model: 'hello',
          state: { num: 1, str: 'abc', bool: true },
          scripts: {
            Code1: {
              code: '',
            },
            Code2: {
              code: 'console.info(param);',
            },
            Code3: {
              type: 'Project',
              code: '../lugiax',
            },
          },
        },
      })
    ).toMatchSnapshot();
  });
  it('getImportScripts', () => {
    expect(
      getImportScripts({
        Code1: {
          code: '',
        },
        Code2: {
          code: 'console.info(param);',
        },
        Code3: {
          type: 'Project',
          code: '../lugiax',
        },
      })
    ).toMatchSnapshot();
  });
});
