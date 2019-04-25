/**
 *
 * create by guorg
 *
 * @flow
 */
import { camelNamed, recursiveChildren } from '../lib/utils';

const data = [
  {
    id: 1,
    children: [
      {
        id: 11,
        children: [{ id: 111 }, { id: 112 }],
      },
      {
        id: 12,
        children: [{ id: 121 }, { id: 122 }],
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        id: 21,
        children: [{ id: 211 }],
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
