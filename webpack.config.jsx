var path = require('path');
var clientPort = require('./etc/config.json').clientPort;

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, './production'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            actions: path.resolve(__dirname, './client/actions'),
            components: path.resolve(__dirname, './client/components'),
            constants: path.resolve(__dirname, './client/constants'),
            containers: path.resolve(__dirname, './client/containers'),
            reducers: path.resolve(__dirname, './client/reducers'),
        },
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react", "stage-1"] // plugins
                }
            },
            {
                test: /\.(s*)css/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        port: clientPort,
        historyApiFallback: true,
        hot: true
    },
}