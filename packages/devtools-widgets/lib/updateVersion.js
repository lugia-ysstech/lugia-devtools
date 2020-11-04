/**
 *
 * @flow
 */

const { writeJSON, readJson } = require('fs-extra');

declare type paramType = {
  forceAlpha: boolean,
  filePath: string
}

async function changeVersion(param: paramType) {
  console.info('--- 检测版本 ---');
  const { filePath } = param;
  try {
    const packageObj = await readJson(filePath);
    const currentVersion = packageObj.version;
    const { forceAlpha = true } = param;
    const newVersion = getNewVersion(currentVersion, forceAlpha);
    packageObj.version = newVersion;
    console.info('--- 写入新版本 ---：', newVersion, '当前版本', currentVersion);
    try {
      await writeJSON(filePath, packageObj);
      console.log('--- 版本修改成功! ---');
    } catch (err) {
      console.error(err);
    }
  } catch (err) {
    console.error(err);
  }
}

function getNewVersion(version: string, forceAlpha: boolean): string {
  let newVersion = '1.0.0-alpha.0';
  if (!version) {
    return newVersion;
  }

  const filterResult = version.match(/\.\d+$/g);
  if (filterResult) {
    const filterVersion = filterResult[0];
    if (filterVersion) {
      const currentVersion = Number(filterVersion.replace(/\./g, ''));
      const newVersionNumber = currentVersion + 1;
      const matchAlpha = version.match(/alpha/g);
      const isAlpha = forceAlpha ? matchAlpha && matchAlpha.length > 0 : true;
      newVersion = isAlpha ? version.replace(/\.\d+$/g, `.${newVersionNumber}`) : `${version}-alpha.0`;
    }
  }

  return newVersion;
}

module.exports = changeVersion;
