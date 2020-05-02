import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const Config: Configuration = {

    entry: {
        main: './src/main.tsx'
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
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

};

export default Config;
