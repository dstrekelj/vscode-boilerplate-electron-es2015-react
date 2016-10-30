var config = require('./webpack.config');

/**
 * This module defines the Webpack configuration to be used when the
 * application is ready for production.
 */

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
