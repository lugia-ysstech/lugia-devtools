/**
 *
 * create by guorg
 *
 * @flow
 */
import conversion from '../lib/index';

describe('conversion index ->', () => {
  it('Card Container', () => {
    expect(conversion(require('./TestData.json'))).toMatchSnapshot();
  });
});
