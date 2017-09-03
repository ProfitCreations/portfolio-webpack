const merge = require('webpack-merge');

const commom = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
    contentBase: './dist/',
    hot: true
  },
});