const path = require('path');

module.exports = {
  entry: {
    button: './src/components/button.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
 module: {
   rules: [
     {
       test: /\.css$/,
       use: [
         'style-loader',
         { loader: 'css-loader', options: { importLoaders: 1 } },
         'postcss-loader'
       ]
     }
   ]
 }
};