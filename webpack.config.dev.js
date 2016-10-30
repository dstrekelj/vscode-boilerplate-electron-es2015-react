var config = require('./webpack.config');

module.exports = {
    context: config.context,
    devtool: config.devtool,
    entry: config.entry,
    module: {
        loaders: [
            config.loaders.js,
            config.loaders.css,
            config.loaders.file
        ]
    },
    node: config.node,
    output: {
        path: './dev',
        filename: config.output.filename,
        publicPath: config.output.publicPath
    },
    plugins: [
        config.plugins.html
    ],
    target: config.target
}
