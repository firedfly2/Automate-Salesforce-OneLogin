import * as path from 'path';
import * as webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: webpack.Configuration = {
  mode: 'production',
  devtool: false,
  entry: {
    content_script: path.join(__dirname, 'src', 'content_script.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    // publicディレクトリにあるファイルをdistディレクトリにコピーする
    new CopyWebpackPlugin({ patterns: [{ from: 'public', to: '.' }] })
  ]
};

export default config;
