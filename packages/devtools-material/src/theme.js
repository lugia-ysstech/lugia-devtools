/**
 *
 * create by grg on 2020/5/25
 *
 * @flow
 */
import fs from 'fs';
import { join } from 'path';
import type { ThemeMetaParams } from '@lugia/devtools-material';
import {
  getFolderNames,
  getDemoFolderNames,
  getFolderName2Meta,
  getPath,
} from './create';

function getThemeFile(
  targetPath: string,
  folderName: string,
  metaName: string
): string {
  return `${targetPath}/${folderName}/lugia.${metaName}.theme.zh-CN.json`;
}

function loadTheme(
  path: string,
  folderName: string,
  metaName: string
): Object[] {
  const fileContent = fs.readFileSync(
    join(getThemeFile(path, folderName, metaName))
  );

  return JSON.parse(fileContent);
}

export async function createThemeMeta(params: ThemeMetaParams) {
  const { targetPath, invalid = [] } = params;
  let total = 0;
  try {
    const allFileNames = await getFolderNames(targetPath, invalid);
    const folderNames = await getDemoFolderNames(allFileNames, targetPath);
    const themeMap = await getFolderName2Meta(
      targetPath,
      folderNames,
      loadTheme
    );
    const keys = Object.keys(themeMap);
    console.log('共获取主题配置组件[%d]个', keys.length);
    let themeMeta = [];
    keys.forEach((folderName: string) => {
      total++;
      const fileThemeMeta = themeMap[folderName];
      if (Array.isArray(fileThemeMeta)) {
        themeMeta = [ ...themeMeta, ...fileThemeMeta ];
      }
    });

    try {
      const designPath = getPath(targetPath, 'themeMeta.json');
      fs.writeFileSync(designPath, JSON.stringify(themeMeta));
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log(`共生成 ${total} 个主题元信息`);
  }
}
