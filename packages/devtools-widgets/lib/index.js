/**
 *
 * create by grg on 2020/6/30
 *
 * @flow
 */
const {
  createDesignInfo,
  createThemeMeta
} = require("@lugia/devtools-material");
const getEntryContent = require("./component.entry");
const {
  ensureFileSync,
  outputJsonSync,
  writeFileSync,
  readJsonSync,
  unlinkSync
} = require("fs-extra");
const { join } = require("path");
process.env.NODE_ENV = "production";
process.env.NODE_ENV = "production";
process.env.__FROM_TEST = true;
process.env.ESLINT = "none";
process.env.TSLINT = "none";
process.env.COMPRESS = "none";
const singleCompile = require("./compile");
const gulp = require("gulp");
const buildTask = require("./gulpfile");
const DesignFile = "designInfo.js";
const ThemeMetaFile = "themeMeta.json";

async function createDesignInfoFile(config) {
  const {
    targetPath,
    componentInvalid,
    hideInTollPanelComponents,
    themeInvalid,
    extendCode
  } = config;
  const designInfoStr = await createDesignInfo(targetPath, componentInvalid, {
    outFile: "string",
    hideInTollPanelComponents
  });
  const designInfoPath = join(targetPath, DesignFile);
  ensureFileSync(designInfoPath);
  writeFileSync(designInfoPath, designInfoStr + extendCode);
  await createThemeMeta({ targetPath, invalid: themeInvalid });
}

module.exports = async function compileComponent(param) {
  const {
    componentInvalid,
    hideInTollPanelComponents,
    themeInvalid,
    extendCode = ""
  } = param;

  const cwd = process.cwd();
  const outputDir = join(cwd, "./src/widgets");
  const entry = "./src/widgets/component.entry.js";
  const entryFile = join(cwd, entry);
  const { name: moduleName, version } = readJsonSync(join(cwd, "package.json"));
  writeFileSync(entryFile, getEntryContent(moduleName, version));
  await createDesignInfoFile({
    targetPath: outputDir,
    componentInvalid,
    hideInTollPanelComponents,
    themeInvalid,
    extendCode
  });

  const { externals = {}, importModules } = param;
  const targetName = `__${moduleName}__${version}`;
  const config = {
    SINGLE_COMPILED: true,
    cwd,
    externals: {
      react: "React",
      "react-dom": "ReactDom",
      "@lugia/lugiax": "lugiax",
      "@lugia/theme-config": "lugiatheme",
      "@lugia/theme-core": "lugiadthemecore",
      "@lugia/dict": "lugiadict",
      "styled-components": "styled",
      ...externals
    },
    entry,
    name: targetName,
    outputDir,
    importModules,
    publicPath: `file:///${outputDir.replace(/\\/g, "\\\\")}/`,
    disableCssExtract: true
  };

  singleCompile(config, (error, result) => {
    if (!result) {
      return;
    }

    const { assets } = result;

    const { outputDir } = config;
    const getFullOutPath = target => join(outputDir, target);
    const dllFilePath = getFullOutPath("./designInfo.dll.json");

    assets.forEach(async asset => {
      const {
        content,
        originalAsset: { name }
      } = asset;

      if (/\.js$/.test(name)) {
        if (outputDir) {
          ensureFileSync(dllFilePath);
          outputJsonSync(dllFilePath, {
            version,
            targetName,
            asset: {
              ...asset,
              content: content.toString()
            }
          });
          unlinkSync(entryFile);
          buildTask(importModules);
          gulp.run("default", () => {
            unlinkSync(dllFilePath);
            unlinkSync(getFullOutPath(ThemeMetaFile));
          });
        }
      }
    });
  });
};
