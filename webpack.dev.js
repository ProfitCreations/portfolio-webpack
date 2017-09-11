const merge = require('webpack-merge');

const commom = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        inline: true,
        port: 3000,
        hot: true,
        progress: true
    }
});
