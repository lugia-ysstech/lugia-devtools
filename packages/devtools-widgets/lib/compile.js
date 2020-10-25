/**
 * Created Date: Thursday, January 17th 2019, 8:16:22 am
 * Author: hanjingbo@ysstech.com | jingboup@gmail.com
 * -----
 * Last Modified: Monday, August 19th 2019, 10:03:05 am
 * Modified By: hanjingbo <hanjingbo@ysstech.com | jingboup@gmail.com>
 * -----
 * Copyright (c) 2019-present, #Lugia#.
 * ------------------------------------
 * Javascript will save your soul!
 */


const tsImportPluginFactory = require('ts-import-plugin');
const build = require('@lugia/mega-scripts/lib/utils/buildApp');
const { join } = require('path');

function compile (
  params,
  cb
) {
  const {
    cwd, entry, name = '__SINGLE_COMPILED__', watch, publicPath, disableCssExtract, externals, importModules = [],
  } = params;


  const babelPlugins = importModules.length > 0 ? importModules.map(module => {
    return [
      'import',
      module,
      module.libraryName
    ]
  }) : [];
  const tsPlugins = {
    transpileOnly: true,
    getCustomTransformers: () => ({
      before: importModules.length > 0 ? [
        tsImportPluginFactory(importModules),
      ] : [],
    }),
    compilerOptions: {
      module: 'es2015',
    },
  };

  build(
    {
      cwd,
      entry,
      watch,
      useMemoryFS: true,
      applyConfig: config => {
        config.entry = {
          'component.entry': [entry]
        }
        return {
          ...config,
          babel: {
            plugins: babelPlugins,
            presets: [
              [
                require.resolve('@lugia/mega-scripts/lib/utils/babel.js'),
                {
                  browsers: ['chrome 70'],
                  autoInstall: true,
                  engine: 'webpackApp',
                },
              ],
            ],
          },
          commons: [],
          html: null,
          hash: null,
          manifest: null,
          browserslist: ['chrome 70'],
          extraBabelIncludes: [
            /react-app-polyfill/,
            /decamelize/,
          ],
          publicPath,
          disableCssExtract
        };
      },
      applyWebpack: (webpackConfig, { merge }) => {
        const config = merge(webpackConfig, {
          output: {
            path: join(cwd, './.lugia/temp'),
            library: name,
            libraryTarget: 'window',
            // filename: '[name].js'
          },
          externals,
        });
        config.module.rules.push({
          test: /\.(tsx|ts)$/,
          loader: 'ts-loader',
          options: tsPlugins,
          exclude: /node_modules/,
        });
        return config;
      },
    },
    cb
  );
}

module.exports = compile;
