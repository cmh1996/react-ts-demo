const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, './src/index.tsx')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name]-[id].[hash:8].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(__dirname, './tsconfig.json')
            })
        ]
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    useCache: true,
                    cacheDirectory: path.join(__dirname, './.cache-loader')
                }
            }]
        }, {
            test: /\.scss$/,
            include: [path.join(__dirname, './src')],
            use: [
                'style-loader',
                {
                    loader: 'cache-loader',
                    options: {
                        cacheDirectory: path.join(__dirname, './.cache-loader')
                    }
                }, {
                    loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true,
                        sass: true
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [path.join(__dirname, './src/static/css')]
                    }
                }
            ]
        }, {
            test: /\.(png|gif|jpg|jpeg|bmp)$/i,
            loader: 'url-loader?limit=5000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.tpl.html')
        }),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'true'))
        })
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8888
    }
}