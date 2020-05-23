const path = require('path')
module.exports = {
    entry : './src/index.js', // Si ienes mas de un archivo de entrada us un arreglo
    output: {
        filename: 'bundle.js',
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
            }
        ]
    }   
}