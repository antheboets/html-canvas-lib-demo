const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

//getting the args
const argv = process.argv.slice(2)
const args = {}

//putting args in a key value pair
let foundEnv  = false
for(let i = 0; i < argv.length; i++){
    if(foundEnv){
        let keyValuePair = argv[i].split('=')
        args[keyValuePair[0]] = keyValuePair[1]
    }
    if(argv[i] === "--env" && !foundEnv){
        foundEnv = true
    }
}

//mode of code optimization development/production/none
let mode = ""
switch(args.optimazation){
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

//of all the modules that will be exported
const moduleList = []

//function that creates a module object and add it to the list
function addModule(name,entry,dir='',outputFilename='main.js'){
    if(fs.existsSync(entry)){
            moduleList.push({
            mode: mode,
            name: name,
            entry: entry,
            output: {
                filename: outputFilename,
                path: path.resolve(__dirname, `./dist${dir}`)
            }
        })
    }
}

async function writeJsonFile (filename,data){
    await fsPromises.writeFile(`${filename}.json`,JSON.stringify(data,null,3),(error)=>{})
}

async function recursiveThroughDir(pathOfDir,contentList){
    let listOfFilesInDir = await fsPromises.readdir(pathOfDir)
    listOfPromises = listOfFilesInDir.map(async (file)=>{
        if(isDir(path.resolve(pathOfDir,file))){
            await recursiveThroughDir(`${pathOfDir}${file}/`,contentList)
        }
        else{
            contentList.push(`${pathOfDir.replace("/dist","")}${file}`)
        }
    })
    await Promise.all(listOfPromises)
}

function isDir(pathOfDir){
    return fs.existsSync(pathOfDir) && fs.lstatSync(pathOfDir).isDirectory() 
}

async function makeListForContentPage(){
    const contentList = []
    await recursiveThroughDir("./dist/content/",contentList)
    await writeJsonFile("./dist/content",contentList)
}

function preBundeling(){
    makeListForContentPage()
}
preBundeling()

//this should be a function that reads the dir maybe?
//adding modules
addModule('index','./src/index.mjs')
addModule('randomTimer','./src/randomTimer.mjs','/randomTimer')
addModule('debugPlayground','./src/debugPlayground.mjs','/debugPlayground')
addModule('clock','./src/clock.mjs','/clock')
addModule('video','./src/video.mjs','/video')
addModule('video2','./src/video2.mjs','/video2')
addModule('content','./src/content.mjs','','content.js')

//postBundeling if needed()

console.log(`bundeling with ${mode} optimazation mode`)

//exporting modules
module.exports = moduleList