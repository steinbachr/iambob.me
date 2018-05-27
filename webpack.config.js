const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

const plugins = [
];

const productionPlugins = [];

module.exports = {
    entry: {
        scroll: 'scrollpos-styler',
        core: path.resolve(__dirname, 'assets/js/core.js')
    },

    resolve: {
        alias: {
            lib: path.resolve(__dirname, 'assets/js/lib')
        }
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('assets/dist'),
    },

    devtool: "inline-sourcemap",

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'assets/js'),
                    path.resolve(__dirname, 'node_modules/bootstrap/'),
                ],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: plugins.concat(debug ? [] : productionPlugins)
};