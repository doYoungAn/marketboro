import { Configuration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import BaseConfig from './webpack.config.base';
import CssLoader from './css-loader';

const Config: Configuration = merge(BaseConfig, {

    mode: 'development',
    devServer: {
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                loaders: [
                    'style-loader',
                    CssLoader,
                    'sass-loader'
                ]
            }
        ]
    },
  
});

export default Config;
