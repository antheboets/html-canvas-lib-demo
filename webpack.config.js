const path = require('path');

const mode = "development"
const moduleList = []


//https://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config
var config = {
  // TODO: Add common Configuration
  mode: mode,
  module: {},
};

moduleList.push(Object.assign({}, config, {
  name: "index",
  entry: './src/index.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}))
moduleList.push(Object.assign({}, config,{
  name: "randomTimer",
  entry: './src/randomTimer.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/randomTimer'),
  },
}))

// Return Array of Configurations
module.exports = [
  moduleList
];