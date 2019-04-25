/**
 *
 * create by guorg
 *
 * @flow
 */
import { camelNamed, recursiveChildren } from '../lib/utils';

const data = [
  {
    Widgetid: 1,
    children: [
      {
        Widgetid: 11,
        children: [{ Widgetid: 111 }, { Widgetid: 112 }],
      },
      {
        Widgetid: 12,
        children: [{ Widgetid: 121 }, { Widgetid: 122 }],
      },
    ],
  },
  {
    Widgetid: 2,
    children: [
      {
        Widgetid: 21,
        children: [{ Widgetid: 211 }],
      },
    ],
  },
];

describe('conversion utils ->', () => {
  it('camelNamed', () => {
    const name = camelNamed('label');
    expect(name).toBe('Label');

    const errName = camelNamed();
    expect(errName).toBe('Label');

    const errorName = camelNamed({});
    expect(errorName).toBe('Label');
  });

  it('recursiveChildren', () => {
    const res = [];
    recursiveChildren(data, res);
    expect(res).toEqual([ 211, 21, 2, 122, 121, 12, 112, 111, 11, 1 ]);

    const errRes = recursiveChildren(undefined, res);
    expect(errRes).toBeUndefined();
    const errorRes = recursiveChildren([], res);
    expect(errorRes).toBeUndefined();
  });
});
