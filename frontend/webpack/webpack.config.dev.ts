import { Configuration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import BaseConfig from './webpack.config.base';

const Config: Configuration = merge(BaseConfig, {

  devServer: {
    historyApiFallback: true
  }
  
});

export default Config;
