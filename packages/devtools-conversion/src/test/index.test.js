/**
 *
 * create by guorg
 *
 * @flow
 */
import conversion from '../index';
describe('conversion index ->', () => {
  it('Card Container', () => {
    expect(conversion(require('./TestData.json'))).toMatchSnapshot();
  });
});
