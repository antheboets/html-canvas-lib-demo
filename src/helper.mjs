const domLoadedTimestamp = new Date()
function debugTimeStamp(){
    return `${(new Date()-domLoadedTimestamp) / 1000} Sec`
}
export function timeStamp(debugStr){
    console.log(debugStr,`${debugTimeStamp()}`)
}

export function randomNumber(min = 0 , max = 100){
    return Math.floor(Math.random() *(max - min) + min)
}

export function printWelcome(){
    console.log("Welcome to the demo")
    console.log("The module source code:")
    console.log("https://github.com/antheboets/canvas-lib")
    console.log("The demo source code:")
    console.log("https://github.com/antheboets/html-canvas-lib-demo")
}