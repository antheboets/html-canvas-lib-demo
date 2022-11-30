import  {getCanvas} from 'canvaslib'
import {timeStamp, randomNumber, printWelcome} from './helper.mjs'

printWelcome()

window.addEventListener("load",async ()=>{
    timeStamp("dom loaded")

    const canvas = getCanvas()
    timeStamp("canvas created")

    canvas.createLayer([{contentType:"video",path:"./../content/YouCantWinIfYouDontPlay.webm",heightMode:"canvasSize",widthMode:"canvasSize"}])
    timeStamp("added background video")

    canvas.createLayer([
    {
        contentType:"image",
        path:"./../content/backgroundLayer1.png",
        heightMode:"canvasSize",
        widthMode:"canvasSize",
        time: 1000*1
    },
    {
        contentType:"image",
        path:"./../content/backgroundLayer2.png",
        heightMode:"canvasSize",
        widthMode:"canvasSize",
        time: 1000*2
    },
    {
        contentType:"image",
        path:"./../content/backgroundLayer3.png",
        heightMode:"canvasSize",
        widthMode:"canvasSize",
        time: 1000*3
    }])

    canvas.getLayer(1).setMode = 'timer'
    timeStamp("added the first layer")

    const randomNumberForTimer = ()=>{
        return randomNumber(1,4) * 1000
    }

    const exampleFunction = ()=>{
        let time = randomNumberForTimer()
        canvas.getLayer(3).setContentPos(9 - time / 1000)
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
                canvas.getLayer(3).setContentPos(9 - (time / 1000))
                return time
            }
        }
    ])

    canvas.getLayer(2).setMode = 'timer'
    timeStamp("added the second layer")


    let numberContentList = []

    for(let i = 9; i >= 0;i--){
        numberContentList.push({
            contentType:"image",
            path:`./../content/number${i}.png`,
            time: 1000,
            x:"75%",
            y:"75%",
            widthMode:"canvasSize",
            width:"20%",
            heightMode:"canvasSize",
            height:"20%",
        })
    }

    timeStamp(numberContentList,"list of numbers ")
    canvas.createLayer(numberContentList)
    canvas.getLayer(3).setMode = 'timer'
    timeStamp("added the third layer")

    await canvas.startAsync()
    timeStamp("canvas started")

    timeStamp(canvas.getLayer(3).content,"list of numbers ")

    console.log(canvas,"done")
    window.addEventListener("mousedown",async (e)=>{
        e.preventDefault
        timeStamp(canvas.getLayer(3).content)
    })
})