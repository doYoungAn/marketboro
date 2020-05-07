import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Webpackbar from 'webpackbar';
import path from 'path';
import PACKAGE from './../package.json';

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
        new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
        new Webpackbar({
            name: PACKAGE.name
        })
    ]

};

export default Config;
