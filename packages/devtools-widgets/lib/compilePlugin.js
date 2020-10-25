/**
 *
 * create by grg on 2020/6/30
 *
 * @flow
 */

process.env.NODE_ENV = "production";
process.env.NODE_ENV = "production";
process.env.__FROM_TEST = true;
process.env.ESLINT = "none";
process.env.TSLINT = "none";
process.env.COMPRESS = "none";
/**
 *
 * create by grg on 2020/6/30
 *
 * @flow
 */

const { outputJson, readJsonSync, ensureFileSync } = require("fs-extra");
const { join } = require("path");
const path = require("path");

const moduleName = "@lugia/action-plugin";
const result = {};

const build = require("./compile");

async function compilePlugin (info) {
  const cwd = process.cwd();
  const { pluginName, outputDir: outputDirName, externals } = info;
  const outputDir = join(cwd, outputDirName);
  const version = getPkgVersion();
  const targetName = `__${moduleName}__${pluginName}`;

  const buildAction = async () => {
    console.info("cwd", cwd);
    const entry = `${outputDirName}/index.tsx`;

    const config = {
      SINGLE_COMPILED: true,
      cwd,
      externals,
      entry,
      name: targetName,
      outputDir: join(cwd, `${outputDirName}`),
      importModules: [
        {
          libraryName: "@lugia/lugia-web",
          libraryDirectory: "dist"
        }
      ],
      publicPath: `file:///${outputDir.replace(/\\/g, "\\\\")}/`,
      disableCssExtract: true
    };
    return new Promise(async resolve => {
      build(config, async (error, result) => {
        if (!result) {
          return;
        }
        const { assets } = result;
        for (const asset of assets) {
          const {
            content,
            originalAsset: { name }
          } = asset;
          if (/\.js$/.test(name)) {
            resolve({
              version,
              targetName,
              asset: {
                ...asset,
                content: content.toString()
              }
            });
          }
        }
      });
    });
  };

  return buildAction();
}

function getPkgVersion () {
  const cwd = process.cwd();
  const { version } = readJsonSync(join(cwd, "./package.json"));

  return version;
}

function parsePluginName (param) {
  const names = param.split("");
  const path = [names[ 0 ].toLowerCase()];
  for (let i = 1; i < names.length; i++) {
    const name = names[ i ];
    const code = name.codePointAt();
    if (code >= 65 && code <= 90) {
      path.push("-");
    }
    path.push(name.toLowerCase());
  }
  return path.join("");
}

async function compile (buildData, externals) {
  const cwd = process.cwd();
  console.info("需打包数量", buildData.length);
  const errPluginNames = [];
  for (let i = 0; i < buildData.length; i++) {
    let buildDatum = buildData[ i ];
    console.info(`打包${i + 1}:`, buildDatum);
    const {
      title: pluginTitle,
      desc: pluginDesc,
      userDef: pluginUserDef,
      type: pluginType,
      pluginName,
      size
    } = buildDatum;
    try {
      let entryPath = `./src/plugins/${parsePluginName(pluginName)}`;
      const target = await compilePlugin({
        ...buildDatum,
        entryPath,
        outputDir: entryPath,
        externals
      });
      const { targetName, asset } = target;
      result[ pluginName ] = {
        title: pluginTitle,
        desc: pluginDesc,
        userDef: pluginUserDef,
        type: pluginType,
        code: asset.content,
        targetName
      };
      if (size) {
        result[ pluginName ].size = size;
      }

      console.info("打包成功-------------------->", pluginName);
    } catch (err) {
      errPluginNames.push(pluginName);
      console.info("打包出错", err);
    }
  }

  console.info("打包失败的插件:", errPluginNames);
  const pluginDllPath = path.join(cwd, "./pluginInfos.dll.json");
  ensureFileSync(pluginDllPath);
  return outputJson(pluginDllPath, result);
}

module.exports = compile;
