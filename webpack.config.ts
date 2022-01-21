import * as webpack from 'webpack';
import CopyPlugin = require('copy-webpack-plugin');

const config: webpack.Configuration = {
    mode: 'production',
    entry: {
        background: {
            import: './src/background/index.ts',
            filename: 'background.js',
        },
        pandaPlaniContentScript: {
            import: './src/pandaplani/contentScript/index.ts',
            filename: 'scripts/pandaplani/contentScript/index.js',
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./manifest.json", to: "manifest.json" },
            ],
        }),
    ],
};

export default config;