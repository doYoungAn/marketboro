import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import BaseConfig from './webpack.config.base';
import CssLoader from './css-loader';

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
		minimizer: [
			new TerserPlugin({
			terserOptions: {
				compress: {
				drop_console: true
				}
			}
			})
		]
	},

	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				loaders: [
					MiniCssExtractPlugin.loader,
					CssLoader,
					'sass-loader'
				]
			}
		]
	},

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]

});

export default Config;
