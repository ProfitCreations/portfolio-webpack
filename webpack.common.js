const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',

    plugins: [

        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            title: 'Portfolio | Luis Pinheiro'
        }),

        new webpack.HotModuleReplacementPlugin()

    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                // use: [
                //   'file-loader'
                // ]
                use: 'url-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },

}