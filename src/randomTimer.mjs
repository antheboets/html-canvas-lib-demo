import  {getCanvas, } from 'canvaslib'
import {timeStamp, randomNumber, printWelcome} from './helper.mjs'

printWelcome()

window.addEventListener("load",async ()=>{
    timeStamp("dom loaded")

    const canvas = getCanvas()
    timeStamp("canvas created")

    canvas.setBackgroundVideo("./../content/background.webm")
    timeStamp("added background video")

    /*
    canvas.createLayer({
        mode:"timer",
        content:[]
    })
    */

    canvas.createLayer([
    {
        contentType:"image",
        path:"./../content/layer1.png",
        time: 1000*1
    },
    {
        contentType:"image",
        path:"./../content/layer2.png",
        time: 1000*2
    },
    {
        contentType:"image",
        path:"./../content/layer3.png",
        time: 1000*3
    }])

    canvas.getLayer(0).setMode = 'timer'
    timeStamp("added the first layer")

    const randomNumberForTimer = ()=>{
        return randomNumber(1,4) * 1000
    }

    const exampleFunction = ()=>{
        let time = randomNumberForTimer()
        console.log(time,"Random")
        return time
    }

    canvas.createLayer([
        {
            contentType:"image",
            path:"./../content/random1.png",
            time: exampleFunction
        },
        {
            contentType:"image",
            path:"./../content/random2.png",
            time: () => {
                let time = randomNumberForTimer()
                console.log(time,"Number")
                return time
            }
        }
    ])
    canvas.getLayer(1).setMode = 'timer'
    timeStamp("added the second layer")

    await canvas.startAsync()
    timeStamp("canvas started")

    console.log(canvas,"done")
    window.addEventListener("mousedown",async (e)=>{
        e.preventDefault
    })
})