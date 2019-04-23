/**
 *
 * create by guorg
 *
 * @flow
 */
import { camelNamed, } from './utils';

export function createBindCode(
  bindItem: ?(Object[]),
  componentName: string,
  mutationInfo: Object[],
  index: number | string
) {
  let bindCode = '';
  let bindCmpName = componentName;
  if (!bindItem || bindItem.length < 1) {
    return { bindCode, componentName: bindCmpName, };
  }
  bindItem.forEach(item => {
    const { modelName, fieldName, propsName, } = item;
    const BindName = camelNamed(modelName) + fieldName.replace(/./g, '');
    const eventCode = `onChange: { ['${fieldName}'](e){ return bindHandleEvent(e); } }`;
    const theBindName = BindName + index;
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

  return { bindCode, componentName: bindCmpName, };
}

export function createConnectCode(
  connectItem: ?(Object[]),
  componentName: string,
  mutationInfo: Object[],
  index: number | string
) {
  let connectCode = '';
  let connectComName = componentName;
  if (
    (!connectItem || connectItem.length < 1) &&
    (!mutationInfo || mutationInfo.length < 1)
  ) {
    return { connectCode, componentName: connectComName, };
  }

  const stateCodes = ['state=>{ return {',];
  let mutationsCodes = 'mutations => { return {';
  connectComName = camelNamed(`connect${componentName}${index}`);
  let theModelName = [];
  if (connectItem && connectItem.length > 0) {
    connectItem.forEach(bindItem => {
      const { modelName, fieldName, propsName, } = bindItem;
      theModelName.push(modelName);
      stateCodes.push(`
      ... getData(state, '${propsName}', '${modelName}', '${fieldName}'),
    `);
    });
  }
  stateCodes.push('}},');
  if (mutationInfo && mutationInfo.length > 0) {
    mutationInfo.forEach(item => {
      const { eventName, modelName, mutationName, } = item;
      theModelName.push(modelName);
      mutationsCodes =
        mutationsCodes +
        `${eventName}: (event) => mutations.${modelName}.${mutationName}({eventArgs: {...event}}),`;
    });
  }
  mutationsCodes = mutationsCodes + '}}';
  theModelName = [...new Set(theModelName),];
  connectCode = `const ${connectComName} = connect(
    [${theModelName.join('')}],
    ${stateCodes.join('')}
    ${mutationsCodes}
  )(${componentName});`;

  return { connectCode, componentName: connectComName, };
}
