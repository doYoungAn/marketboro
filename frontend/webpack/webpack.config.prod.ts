import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import BaseConfig from './webpack.config.base';

const Config: Configuration = merge(BaseConfig, {

  mode: 'production',

  output: {
    filename: '[name].[hash].js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\]node_modules[\\]/,
          name: 'common',
          chunks: 'all'
        }
      }
    },
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       compress: {
    //         drop_console: true
    //       }
    //     }
    //   }),
    //   new OptimizeCssAssetsPlugin({
    //     assetNameRegExp: /\.css$/g,
    //     cssProcessor: require('cssnano'),
    //     cssProcessorOptions: {
    //       preset: ['default', { discardComments: { removeAll: true }}]
    //     }
    //   })
    // ]
  },

  module: {
    rules: [
        {
            test: /\.(s*)css$/,
            loaders: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',
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

  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]

});

export default Config;
