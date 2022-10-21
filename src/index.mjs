import  {getCanvas} from 'canvaslib'
import {timeStamp, printWelcome} from './helper.mjs'

printWelcome()

window.addEventListener("load",async ()=>{
    timeStamp("dom loaded")

    let active = false

    const canvas = getCanvas()
    timeStamp("canvas created")

    canvas.drawFps = true

    canvas.setBackgroundVideo("./content/WinningAMeal.webm")
    timeStamp("added background video")

    canvas.createLayer([
        {contentType:"image",path:"./content/backgroundLayer1.png",time:3 * 1000},
        {contentType:"image",path:"./content/backgroundLayer2.png",time:3 * 1000},
        {contentType:"image",path:"./content/backgroundLayer3.png",time:3 * 1000}
    ])
    canvas.getLayer(0).setMode = 'timer'
    timeStamp("added first layer")

    canvas.createLayer([
        "./content/helloWorld1.png",
        "./content/helloWorld2.png"
    ])
    timeStamp("added second layer")

    console.log(canvas.getLayers(),"layers")
    console.log(canvas.getLayer(0),"layer")

    await canvas.startAsync()
    timeStamp("canvas started")
    active = true

    console.log(canvas,"done")
    
    window.addEventListener("mousedown",async (e)=>{
        e.preventDefault
        if(active){
            if(e.wich === 3){
                canvas.getLayer(1).previous()
            }
            else{
                canvas.getLayer(1).next()
            }
        }
    })
})