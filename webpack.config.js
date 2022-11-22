const path = require('path')
const fs = require('fs')
//getting the args
const args = process.argv.slice(2)
//of all the modules that will be exported
const moduleList = []
//mode of code optimization development/production/none
let mode = "production"
//getting mode out of args
for(let i = 0; i < args.length; i++){
    if(args[i] === "--env"){
        switch(args[i+1]){
            case "dev":
                mode = "development"
            break
            case "prod":
                mode = "production"
            break
            case "none":
                mode = "none"
            break
            default:
                mode = "production"
            break
        }
        //i have no idea if this works and if this is a good thing but it seems to work
        i = Infinity
    }
}
//function that creates a module object and add it to the list
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
//adding modules
addModule('index','./src/index.mjs')
addModule('randomTimer','./src/randomTimer.mjs','/randomTimer')
addModule('debugPlayground','./src/debugPlayground.mjs','/debugPlayground')
addModule('clock','./src/clock.mjs','/clock')
addModule('video','./src/video.mjs','/video')
//exporting modules
module.exports = moduleList