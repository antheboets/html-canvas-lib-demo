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

    //canvas.addLayerFromList([{path:"./layer1.png",time:()=>{console.log("layer1");return 3 * 1000;}},{path:"./layer2.png",time:()=>{randomNumber(0,5)*1000}},{path:"./layer3.png",time:1 * 1000}])
    //timeStamp("added first layer")

    canvas.createLayer([
        {contentType:"image",path:"./content/backgroundLayer1.png",time:3 * 1000},
        {contentType:"image",path:"./content/backgroundLayer2.png",time:3 * 1000},
        {contentType:"image",path:"./content/backgroundLayer3.png",time:3 * 1000}
    ])
    canvas.getLayer(0).setMode = 'timer'
    timeStamp("added first layer")

    //canvas.addLayerFromList([{path:"./layer11.png",time:1* 1000},{path:"./layer12.png",time:1 * 1000}])
    //canvas.createLayer([{path:"./random1.png",time:()=>{timeStamp("random1");return 10 * 1000}},{path:"./random2.png",time:()=>{timeStamp("random2");return 3 * 1000}},{path:"./layer1.png",time:()=>{timeStamp("layer1");return 5 * 1000}}])
    canvas.createLayer([
        "./content/helloWorld1.png",
        "./content/helloWorld2.png"
    ])
    timeStamp("added second layer")

    console.log(canvas.getLayers(),"layers")
    console.log(canvas.getLayer(0),"layer")

    //canvas.getLayer(0).setMode = 'timer'
    //console.log(canvas.getLayer(0))

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