const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './client/Editor/index.tsx',
        vendor: ['react', 'react-dom'],
    },
    output: {
        filename: "[name].[hash:16].js",
        path: path.resolve(__dirname, '../dist/client')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
                include: path.resolve(__dirname, '../client')
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: "vendor",
                    name: "vendor"
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
