const path = require('path');
const fs = require('fs');

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
if(fs.existsSync('src/debugPlayground.mjs')){
  moduleList.push(Object.assign({}, config,{
    name: "debugPlayground",
    entry: './src/debugPlayground.mjs',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/debugPlayground'),
    },
  }))
}
moduleList.push(Object.assign({}, config,{
  name: "clock",
  entry: './src/clock.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/clock'),
  },
}))

// Return Array of Configurations
module.exports = [
  moduleList
];