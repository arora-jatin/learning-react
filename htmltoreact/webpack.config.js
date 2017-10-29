var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./js/app'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2017', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};