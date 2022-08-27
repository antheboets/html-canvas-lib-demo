import  {getCanvas} from  '../../canvaslib/HtmlCanvasLib.js'


window.addEventListener("load",async ()=>{
    const canvas = getCanvas()

    canvas.setBackgroundVideo("./background.webm")

    canvas.addImageLayerFromList(["./layer1.png","./layer2.png","./layer3.png"])

    canvas.addImageLayerFromList(["./layer11.png","./layer12.png"])

    console.log(canvas.getLayers())

    await canvas.startAsync()
    console.log(canvas,"done")
})