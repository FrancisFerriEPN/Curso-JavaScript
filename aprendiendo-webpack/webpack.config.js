const path = require('path');
const HtmlWenpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry : {
        index: './src/js/index.js', // Si ienes mas de un archivo de entrada us un arreglo
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test :/\.css$/,
                use :[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test :/\.scss$/,
                use :[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ]
            }
        ]
    },
    optimization: {
        splitChunks:{
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    plugins : [
        new HtmlWenpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: "Login"
        }),
        new HtmlWenpackPlugin({
            filename: 'nosotros.html',
            template: 'src/nosotros.html',
            title: "Nosotros"
        })
    ]
}