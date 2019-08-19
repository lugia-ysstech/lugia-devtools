/*
 *
 * create by guorg
 *
 * @flow
 */
export function createImageImport(images: Object[]): string {
  const result = [];
  if (!images) {
    return result.join(';');
  }
  images.forEach((item: Object) => {
    const { name, value } = item;
    result.push(`import ${name} from '${value}'`);
  });
  return result.join(';');
}
