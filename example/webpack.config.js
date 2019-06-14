// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
  entry: ['./demo/demo.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './demo',
    hot: true,
    disableHostCheck: true
  }
};
