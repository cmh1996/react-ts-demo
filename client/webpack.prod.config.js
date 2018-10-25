const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
                loader: 'awesome-typescript-loader'
            }]
        }, {
            test: /\.scss$/,
            include: [path.join(__dirname, './src')],
            use: [
                MiniCssExtractPlugin.loader,
                {
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
        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.tpl.html')
        }),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'true'))
        }),

        new webpack.optimize.ModuleConcatenationPlugin(),

        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),

        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),

        // 分离CSS和JS文件
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    }
}