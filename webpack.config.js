const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};