const path = require('path')
const fs = require('fs')

const mode = "development"
const moduleList = []

//https://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config
const config = {
  // TODO: Add common Configuration
  mode: mode,
  module: {},
}

function addModule(name,entry,dir=''){
  if(fs.existsSync(entry)){
    console.log(entry)
    moduleList.push(Object.assign({}, config), {
      name: name,
      entry: entry,
      output:{
        filename: 'main.js',
        path: path.resolve(__dirname, `./dist${dir}`)
      }
    })
  }
}

addModule('index','./src/index.mjs')
addModule('randomTimer','./src/randomTimer.mjs','/randomTimer')
addModule('debugPlayground','./src/debugPlayground.mjs','/debugPlayground')
addModule('clock','./src/clock.mjs','/clock')

// Return Array of Configurations
module.exports = [
  moduleList
]