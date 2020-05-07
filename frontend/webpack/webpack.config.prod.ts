import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import BaseConfig from './webpack.config.base';

const Config: Configuration = merge(BaseConfig, {

  mode: 'production',

  output: {
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
        {
            test: /\.(s*)css$/,
            loaders: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                            mode: (resolvePath: string) => {
                                if (resolvePath.match(/node_modules/)) {
                                    return 'global';
                                }
                                return 'local';
                            }
                        },
                    }
                },
                'sass-loader'
            ]
        }
    ]
  },

});

export default Config;
