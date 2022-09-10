import  {getCanvas} from '../../canvaslib/HtmlCanvasLib.js'
import {timeStamp} from './helper.mjs'

window.addEventListener("load",async ()=>{
    timeStamp("dom loaded")

    const canvas = getCanvas()
    timeStamp("canvas created")

    canvas.drawFps = true

    canvas.setBackgroundVideo("./background.webm")
    timeStamp("added background video")

    canvas.addImageLayerFromList(["./layer1.png","./layer2.png","./layer3.png"])
    timeStamp("added first layer")

    canvas.addImageLayerFromList(["./layer11.png","./layer12.png"])
    timeStamp("added second layer")

    console.log(canvas.getLayers())

    await canvas.startAsync()
    timeStamp("canvas started")

    console.log(canvas,"done")
})