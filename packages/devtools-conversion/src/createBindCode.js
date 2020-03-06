/**
 *
 * create by guorg
 *
 * @flow
 */
import { camelNamed } from './utils';

export function createBindCode(
  bindItem: ?(Object[]),
  componentName: string,
  mutationInfo: Object[],
  index: number | string
): Object {
  let bindCode = '';
  let bindCmpName = componentName;
  if (!bindItem || bindItem.length < 1) {
    return { bindCode, componentName: bindCmpName };
  }
  bindItem.forEach((item: Object) => {
    const { modelName, fieldName, propsName } = item;
    const BindName = camelNamed(modelName) + fieldName.replace(/./g, '');
    const eventCode = `onChange: { ['${fieldName}'](e){ return bindHandleEvent(e); } }`;
    let theBindName = BindName + index;
    if (theBindName.indexOf('.') > -1) {
      theBindName = theBindName.split('.').join('');
    }
    bindCmpName = theBindName;
    bindCode =
      bindCode +
      `const ${theBindName} = bindTo(
      ${modelName},
      {
        '${fieldName}': '${propsName}'
      },
      {
        ${eventCode}
      }
    )(${componentName});`;
  });

  return { bindCode, componentName: bindCmpName };
}

export function createConnectCode(
  connectItem: ?(Object[]),
  componentName: string,
  mutationInfo: Object[],
  index: number | string
): Object {
  let connectCode = '';
  let connectComName = componentName;
  if (
    (!connectItem || connectItem.length < 1) &&
    (!mutationInfo || mutationInfo.length < 1)
  ) {
    return { connectCode, componentName: connectComName };
  }

  const stateCodes = [ 'state=>{ return {' ];
  let mutationsCodes = 'mutations => { return {';
  connectComName = camelNamed(`connect${componentName}${index}`);
  if (connectComName.indexOf('.') > -1) {
    connectComName = connectComName.split('.').join('');
  }
  let theModelName = [];
  if (connectItem && connectItem.length > 0) {
    connectItem.forEach((bindItem: Object) => {
      const { modelName, fieldName, propsName } = bindItem;
      theModelName.push(modelName);
      stateCodes.push(`
      ... getData(state, '${propsName}', ${modelName}, '${fieldName}'),
    `);
    });
  }
  stateCodes.push('}},');
  if (mutationInfo && mutationInfo.length > 0) {
    mutationInfo.forEach((item: Object) => {
      const { eventName, modelName, mutationName } = item;
      theModelName.push(modelName);
      mutationsCodes =
        mutationsCodes +
        `${eventName}: (...event) => ${modelName}.mutations.${mutationName}({events: event}),`;
    });
  }
  mutationsCodes = mutationsCodes + '}}';
  theModelName = [ ...new Set(theModelName) ];
  connectCode = `const ${connectComName} = connect(
    [${theModelName.join(',')}],
    ${stateCodes.join('')}
    ${mutationsCodes}
  )(${componentName});`;

  return { connectCode, componentName: connectComName };
}
