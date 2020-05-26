const path = require('path')
module.exports = {
    entry : {
        index: './src/js/index.js', // Si ienes mas de un archivo de entrada us un arreglo
        nosotros: './src/js/nosotros.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
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
    }
}