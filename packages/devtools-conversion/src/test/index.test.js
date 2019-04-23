/**
 *
 * create by guorg
 *
 * @flow
 */
import conversion from '../lib/index';
import chai from 'chai';

const { expect } = chai;

describe('conversion index ->', () => {
  it('Card Container', () => {
    expect(conversion(require('./TestData.json'))).toMatchSnapshot();
  });
});
