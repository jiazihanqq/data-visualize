const merge = require('webpack-merge');
const baseWebpackConfig = require('../webpack.common');
const path = require('path');
module.exports = merge(baseWebpackConfig, {
    mode: 'production'
});
