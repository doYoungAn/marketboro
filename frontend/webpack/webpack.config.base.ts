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
            },
            {
                test: /\.(s*)css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

};

export default Config;
