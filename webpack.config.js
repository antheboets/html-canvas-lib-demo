const path = require('path');

const mode = "development"

module.exports = {
  mode: mode,
  entry: './src/index.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = {
  mode: mode,
  entry: './src/randomTimer.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/randomTimer'),
  },
};