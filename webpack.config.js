var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

var DIR_IN = path.join(__dirname, 'source');

/**
 * This module defines the base Webpack configuration from which the
 * `dev` and `app` configurations borrow.
 */

module.exports = {
    context: DIR_IN,
    devtool: '#inline-source-map',
    entry: {
        'index': './index.js',
        'app/app': './app/app.js'
    },
    loaders: {
        js: {
            test: /\.js$/,
            loader: 'babel',
            include: DIR_IN  
        },
        css: {
            test: /\.css$/,
            loaders: [ 'style', 'css' ],
            include: DIR_IN
        },
        file: {
            test: /\.(bmp|gif|jpg|jpeg|png)$/,
            loader: 'file?name=./assets/images/[hash].[ext]',
            include: DIR_IN
        }
    },
    node: {
        __dirname: false,
        __filename: false
    },
    output: {
        filename: '[name].js',
        publicPath: './'
    },
    plugins: {
        html: new HtmlWebpackPlugin({
            chunks: [ 'app/app' ],
            filename: './index.html',
            template: path.join(DIR_IN, 'index.html')
        }),
        copy: new CopyWebpackPlugin([
            { from: './package.json' }   
        ])
    },
    target: 'electron'
}
