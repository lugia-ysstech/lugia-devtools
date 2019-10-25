/**
 *
 * create by guorg
 *
 * @flow
 */
import conversion from '../src/index';

describe('conversion index ->', () => {
  it('Card Container', () => {
    expect(conversion(require('./TestData.json'))).toMatchSnapshot();
  });
  it('old version', () => {
    expect(conversion(require('./oldVersion.json'))).toMatchSnapshot();
  });
});
