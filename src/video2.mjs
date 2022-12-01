import {getCanvas} from 'canvaslib'
import {timeStamp, printWelcome, addingHomepageButton} from './helper.mjs'

printWelcome()

window.addEventListener("load",async ()=>{
    timeStamp("dom loaded")

    const canvas = getCanvas()
    timeStamp("canvas created")

    canvas.drawFps = true

    canvas.createLayer([{path:"./../content/10secBHopBenchmark.webm",x:0,y:0,height:"50%",width:"50%",heightMode:"canvasSize",widthMode:"canvasSize"}])
    timeStamp("added first video layer")

    canvas.createLayer([{path:"./../content/10secBHopBenchmark.webm",x:"50%",y:0,height:"50%",width:"50%",heightMode:"canvasSize",widthMode:"canvasSize"}])
    timeStamp("added second video layer")

    canvas.createLayer([{path:"./../content/10secBHopBenchmark.webm",x:0,y:"50%",height:"50%",width:"50%",heightMode:"canvasSize",widthMode:"canvasSize"}])
    timeStamp("added third video layer")

    canvas.createLayer([{path:"./../content/10secBHopBenchmark.webm",x:"50%",y:"50%",height:"50%",width:"50%",heightMode:"canvasSize",widthMode:"canvasSize"}])
    timeStamp("added fourth video layer")

    addingHomepageButton(canvas)
    timeStamp("added home button")

    await canvas.startAsync()
    timeStamp("canvas started")

    console.log(canvas,"done")

    let con = true
    window.addEventListener("mousedown",async (e)=>{
        e.preventDefault
        if(con){
            con = false
            canvas.stop()
        }
        else{
            con = true
            await canvas.startAsync()
        }
    })
})