var config = require('./webpack.config');

module.exports = {
    context: config.context,
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
        path: './app',
        filename: config.output.filename,
        publicPath: config.output.publicPath
    },
    plugins: [
        config.plugins.html,
        config.plugins.copy
    ],
    target: config.target
}
