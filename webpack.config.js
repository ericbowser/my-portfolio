const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require('dotenv').config();

const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'production';
const host = process.env.HOST || '127.0.0.1';

console.log('port: ', port);
console.log('env: ', environment);
console.log('HOST: ', host);

module.exports = {
    entry: './src/index.js',
    mode: environment,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        fallback: {
            os: require.resolve("os-browserify/browser"),
            path: require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            https: require.resolve("https-browserify"),
            url: require.resolve("url"),
            assert: require.resolve("assert"),
            http: require.resolve("stream-http"),
            stream: require.resolve("stream-browserify")
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
    devServer: {
        historyApiFallback: true,
        open: true,
        port: process.env.PORT || 3000,
        host: process.env.HOST || '127.0.0.1',
    },
    performance:
        {
            hints: false,
            maxEntrypointSize:
                312000,
            maxAssetSize:
                312000,
        }
};