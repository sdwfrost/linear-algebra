const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname),
    filename: './dist/linear-algebra.js'
  },
  externals: [
  ],
  node: {
    fs: "empty"
 }
}