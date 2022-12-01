const domLoadedTimestamp = new Date()
function debugTimeStamp(){
    return `${(new Date()-domLoadedTimestamp) / 1000} Sec`
}
export function timeStamp(debugStr, extraString = ""){
    console.log(debugStr,`${extraString}${debugTimeStamp()}`)
}

export function randomNumber(min = 0 , max = 100){
    return Math.floor(Math.random() *(max - min) + min)
}

export function printWelcome(){
    console.log("Welcome to the demo")
    console.log("Web design is my passion")
    console.log("The module source code:")
    console.log("https://github.com/antheboets/canvas-lib")
    console.log("The demo source code:")
    console.log("https://github.com/antheboets/html-canvas-lib-demo")
}
export function addingHomepageButton(canvas){
    canvas.createLayer({
        contentType:"image",
        path:"./../content/homeButton.png",
        x:20,
        y:20,
        click:true,
        clickAction:()=>{
            window.location.replace("../index.html")
        }
    })
}