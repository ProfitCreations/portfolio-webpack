const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        index: './src/js/index.js',
        // resume: './src/js/resume.js'
    },

    plugins: [

        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            title: 'Portfolio | Luis Pinheiro',
            minify: {
                collapseWhiteSpace: true
            },
            template: "./src/templates/index.ejs"
        }),

        new webpack.HotModuleReplacementPlugin()

    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                            // publicPath: './dist/',
                            // outputPath: './'
                        }
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'url-loader'
            }
        ]
    },
    // postcss: function() {
    //     return [rucksack];
    // },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js'
    },

}
