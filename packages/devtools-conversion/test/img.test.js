/**
 *
 * create by guorg
 *
 * @flow
 */
import { createImageImport } from '../src/img';
import conversion from '../src';

describe('conversion createImageImport ->', () => {
  it('error arg', () => {
    const spaceCode = createImageImport();
    expect(spaceCode).toBe('');
    const errCode = createImageImport(undefined);
    expect(errCode).toBe('');
    const errorCode = createImageImport(null);
    expect(errorCode).toBe('');
    const code = createImageImport([]);
    expect(code).toBe('');
  });
  it('createImageImport', () => {
    const images = [
      { name: 'img1', value: './image.img1.jpg' },
      { name: 'img2', value: './image.img2.jpg' },
      { name: 'img3', value: './image.img3.jpg' },
      { name: 'img4', value: './image.img4.jpg' },
      { name: 'img5', value: './image.img5.jpg' },
    ];
    expect(createImageImport(images)).toMatchSnapshot();
  });
});
