const path = require('path');

module.exports = {
  entry: {
    main: './src/javascript/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [],
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
