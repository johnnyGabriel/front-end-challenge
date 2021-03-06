var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html' },
            { from: './src/style.css' },
            {
                from: './node_modules/bootstrap/dist',
                to: './libs/bootstrap'
            },
            { from: './products.json' }
        ])
    ],
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 8000,
        historyApiFallback: true
    }
}