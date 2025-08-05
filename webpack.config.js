const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const config = require('./env.json');
const fs = require('fs');
/*
let httpsConfig = {
    key: fs.readFileSync(path.resolve(__dirname, 'ssl_cert/server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'ssl_cert/server.crt')),
};*/

const port = config.PORT || 3000
const environment = config.NODE_ENV || 'production';
const host = config.HOST || '127.0.0.1';

console.log('port: ', port);
console.log('env: ', environment);
console.log('HOST: ', host);

module.exports = {
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        open: true,
        port: port || 3000,
        host: host || '127.0.0.1',
        hot: true,
        liveReload: true,
        server: {
            type: 'https',
           options: {}
        }
    },
    mode: environment,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        fallback: {
      /*      os: require.resolve("os-browserify/browser"),
            path: require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            https: require.resolve("https-browserify"),
            url: require.resolve("url"),
            assert: require.resolve("assert"),
            http: require.resolve("stream-http"),
            stream: require.resolve("stream-browserify")*/
        },
        extensions: [".jsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg|pdf)$/i,
                loader: 'file-loader',
                options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                },
            },
            {
                test: /\.css$/i,
                use:
                    ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html"})
    ],
    devtool: "eval-source-map",
    stats: {
        errorDetails: true,
        warnings: true
    },
  /*  performance:
        {
            hints: false,
            maxEntrypointSize:
                512000,
            maxAssetSize:
                512000,
        }*/
};