var path = require('path'); //nodejs модуль path
var webpack = require('webpack'); //пакет webpack

var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        vendors: path.join(__dirname, 'App', 'vendors'),
        main: path.join(__dirname, 'App', 'main')
},
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "webpack-sass"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.html', '.sass', '.ts']
    },
    target: 'web',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'App', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
    ]
}