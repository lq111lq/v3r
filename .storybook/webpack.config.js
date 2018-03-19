'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpack = require('webpack');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../stories')],
    enforce: 'pre',
  });
  storybookBaseConfig.devtool = 'cheap-module-eval-source-map'
  storybookBaseConfig.resolve.alias.src = resolve('src')

  storybookBaseConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      chunks: ['preview'],
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
    })
  );

  return storybookBaseConfig;
};