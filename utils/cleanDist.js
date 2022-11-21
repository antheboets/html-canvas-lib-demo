const path = require('node:path')
const fs = require('fs')

function recursiveThroughDir(pathOfDir){
    fs.readdir(pathOfDir,(error, fileList)=>{
        if(error === null){
            fileList.forEach((file)=>{
                if(isDir(path.resolve(pathOfDir,file))){
                    recursiveThroughDir(path.resolve(pathOfDir,file))
                }
                else if(file === "main.js"){
                    fs.unlink(path.resolve(pathOfDir,file),()=>{})
                }
            })
        }
    })
}

function isDir(pathOfDir){
    return fs.existsSync(pathOfDir) &&  fs.lstatSync(pathOfDir).isDirectory() 
}

function main(){
    recursiveThroughDir("./../dist/")
}

main()