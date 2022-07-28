import * as webpack from 'webpack';
import CopyPlugin = require('copy-webpack-plugin');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config: webpack.Configuration = {
    mode: 'production',
    entry: {
        background: {
            import: './src/background/index.ts',
            filename: 'background.js',
        },
        pandaPlaniContentScript: {
            import: './src/pandaPlani/contentScript/index.ts',
            filename: 'scripts/pandaPlani/contentScript/index.js',
        },
        pandaPlaniStyles: {
            import: './src/pandaPlani/styles/index.scss',
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            'node_modules'
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./manifest.json", to: "manifest.json" },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: (pathData) => {
                return `styles/${pathData.chunk.name.replace('Styles', '')}/index.css`;
            },
        }),
    ],
};

export default config;