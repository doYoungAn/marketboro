import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Webpackbar from 'webpackbar';
import path from 'path';

const Config: Configuration = {

    entry: {
        main: './src/main.tsx',
        swiper: './node_modules/swiper/css/swiper.min.css',
        uikit: './node_modules/uikit/dist/css/uikit.min.css'
    },

    module: {
        rules: [
            {
                test: /\.ts(x*)$/,
                loader: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
        alias: {
            "~": path.join(__dirname, './../src')
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new Webpackbar()
    ]

};

export default Config;
