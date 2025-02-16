const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'production';

/*const {
    sentryWebpackPlugin
} = require("@sentry/webpack-plugin");*/

console.log('port: ', port);
console.log('env: ', environment);
module.exports = {
    entry: {
        main: './src/index.js',
        card: './src/components/Cards.js',
        nav: './src/components/Nav.js',
        skills: './src/components/Skills.js'
    },
    mode: environment,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        fallback: {
            path: require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            https: require.resolve("https-browserify"),
            assert: require.resolve("assert"),
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
                test: /\.(gif|png|jpe?g|svg|docx)$/i,
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
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new Dotenv(),
      /*  sentryWebpackPlugin({
            authToken: process.env.SENTRY_AUTH_TOKEN,
            org: "self-xah",
            project: "javascript-react"
        }),*/
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8887  // Use a different port for each instance
        })
    ],
    devtool: "eval-source-map",
    stats: {
        errorDetails: true,
        warnings: true
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        port: process.env.PORT,
        host: 'localhost'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,     // Minimum size for a chunk to be generated
            maxSize: 70000,     // Maximum size for a chunk to be generated
            minChunks: 1,       // Minimum number of chunks that must share a module before splitting
            automaticNameDelimiter: '~', // Delimiter for naming chunks
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
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