import {getCanvas, BackgroundVideo} from 'canvaslib'
import {timeStamp, printWelcome} from './helper.mjs'

printWelcome()

window.addEventListener("load",async ()=>{
    timeStamp("dom loaded")

    let active = false

    const canvas = getCanvas()
    timeStamp("canvas created")

    canvas.drawFps = true

    //background video
    let video = BackgroundVideo()
    video.path = "./content/WinningAMeal.webm"

    console.log(video)
    canvas.createLayer(video)
    timeStamp("added background video layer")
    /*
    canvas.createLayer([
        {contentType:"image",path:"./content/backgroundLayer1.png",time:3 * 1000},
        {contentType:"image",path:"./content/backgroundLayer2.png",time:3 * 1000},
        {contentType:"image",path:"./content/backgroundLayer3.png",time:3 * 1000}
    ])
    canvas.getLayer(1).setMode = 'timer'
    timeStamp("added second layer")
    
    canvas.createLayer([
        "./content/helloWorld1.png",
        "./content/helloWorld2.png"
    ])
    timeStamp("added third layer")

    canvas.createLayer([{contentType:"video",path:"./content/ANontypicalDayAtWork.webm",y:"25%",x:"25%",height:"25%",width:"25%", click:true,clickAction:()=>{window.location.replace("video2/index.html")}}])
    */

    canvas.createLayer([{contentType:"image",path:"./content/linkButton.png",x:40,y:50,click:true,clickAction:()=>{window.location.replace("./clock/index.html")}}])
    canvas.createLayer([{contentType:"image",path:"./content/linkButton.png",x:40,y:300,click:true,clickAction:()=>{window.location.replace("./randomTimer/index.html")}}])
    canvas.createLayer([{contentType:"image",path:"./content/linkButton.png",x:40,y:550,click:true,clickAction:()=>{window.location.replace("./video/index.html")}}])
    canvas.createLayer([{contentType:"image",path:"./content/linkButton.png",x:40,y:800,click:true,clickAction:()=>{window.location.replace("./video2/index.html")}}])

    await canvas.startAsync()
    timeStamp("canvas started")
    active = true

    console.log(canvas,"done")
    
    window.addEventListener("mousedown",async (e)=>{
        e.preventDefault
        if(active){
            if(e.wich === 3){
                canvas.getLayer(2).previous()
            }
            else{
                canvas.getLayer(2).next()
            }
        }
    })
})