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

const tsImportPluginFactory = require("ts-import-plugin");
const build = require("@lugia/mega-scripts/lib/utils/buildApp");
const { join } = require("path");

function compile (params, cb) {
  const {
    cwd,
    entry,
    name = "__SINGLE_COMPILED__",
    watch,
    publicPath,
    disableCssExtract,
    externals,
    importModules = []
  } = params;

  const babelPlugins =
    importModules.length > 0
      ? importModules.map(module => {
        return ["import", module, module.libraryName];
      })
      : [];
  const tsPlugins = {
    transpileOnly: true,
    getCustomTransformers: () => ({
      before:
        importModules.length > 0 ? [tsImportPluginFactory(importModules)] : []
    }),
    compilerOptions: {
      module: "es2015"
    }
  };

  build(
    {
      cwd,
      entry,
      watch,
      useMemoryFS: true,
      applyConfig: config => {
        config.entry = {
          "component.entry": [entry]
        };
        return {
          ...config,
          babel: {
            plugins: babelPlugins,
            presets: [
              [
                require.resolve("@lugia/mega-scripts/lib/utils/babel.js"),
                {
                  browsers: ["chrome 70"],
                  autoInstall: true,
                  engine: "webpackApp"
                }
              ]
            ]
          },
          commons: [],
          html: null,
          hash: null,
          manifest: null,
          browserslist: ["chrome 70"],
          extraBabelIncludes: [/react-app-polyfill/, /decamelize/],
          publicPath,
          disableCssExtract
        };
      },
      applyWebpack: (webpackConfig, { merge }) => {
        const config = merge(webpackConfig, {
          output: {
            path: join(cwd, "./.lugia/temp"),
            library: name,
            libraryTarget: "window"
            // filename: '[name].js'
          },
          externals
        });
        config.module.rules.push({
          test: /\.(tsx|ts)$/,
          loader: "ts-loader",
          options: tsPlugins,
          exclude: /node_modules/
        });
        config.module.rules = config.module.rules.filter(item => {
          return item.loader !== require.resolve("url-loader");
        });
        config.module.rules.push(
          ...[
            {
              test: /^((?!\.lugia-icon).)*\.(scss|sass)$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: "css-loader",
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]__[local]__[hash:base64:5]",
                    sourceMap: true
                  }
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false
                  }
                }
              ]
            },
            // WOFF Font
            {
              test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
              use: {
                loader: "url-loader",
                options: {
                  limit: 2000000,
                  mimetype: "application/font-woff"
                }
              }
            },
            // WOFF2 Font
            {
              test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
              use: {
                loader: "url-loader",
                options: {
                  limit: 2000000,
                  mimetype: "application/font-woff"
                }
              }
            },
            // TTF Font
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              use: {
                loader: "url-loader",
                options: {
                  limit: 2000000,
                  mimetype: "application/octet-stream"
                }
              }
            },
            // EOT Font
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              use: "file-loader"
            },
            // SVG Font
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              use: {
                loader: "url-loader",
                options: {
                  limit: 2000000,
                  mimetype: "image/svg+xml"
                }
              }
            },
            {
              test: /\.(?:ico|gif|png|jpg|jpeg|webp|mp4)$/,
              use: {
                loader: "url-loader",
                options: {
                  limit: 2000000
                }
              }
            }
          ]
        );
        return config;
      }
    },
    cb
  );
}

module.exports = compile;
