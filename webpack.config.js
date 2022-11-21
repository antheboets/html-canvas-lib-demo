const path = require('path')
const fs = require('fs')

const mode = "development"
const moduleList = []

function addModule(name,entry,dir=''){
    if(fs.existsSync(entry)){
            moduleList.push({
            mode: mode,
            name: name,
            entry: entry,
            output: {
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

module.exports = moduleList