var path = require('path');

module.exports = {
    // Change to your "entry-point".
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};