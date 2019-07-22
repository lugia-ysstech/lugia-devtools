/**
 *
 * create by guorg
 *
 * @flow
 */
import { camelNamed, recursiveChildren } from '../src/utils';

const data = [
  {
    widgetId: 1,
    children: [
      {
        widgetId: 11,
        children: [{ widgetId: 111 }, { widgetId: 112 }],
      },
      {
        widgetId: 12,
        children: [{ widgetId: 121 }, { widgetId: 122 }],
      },
    ],
  },
  {
    widgetId: 2,
    children: [
      {
        widgetId: 21,
        children: [{ widgetId: 211 }],
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
