var config = require('./webpack.config');

/**
 * This module defines the Webpack configuration to be used when the
 * application is developed.
 */

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
