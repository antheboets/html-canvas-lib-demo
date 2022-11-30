import {getCanvas} from 'canvaslib'
import {timeStamp, printWelcome, addingHomepageButton} from './helper.mjs'

printWelcome()

window.addEventListener("load",async ()=>{
    timeStamp("dom loaded")


    const getLayerList = (x=0,y=0,sec=1)=>{
        const listWithContent = []
        for(let i = 0; i < 10;i++){
            listWithContent.push({
                contentType:"image",
                path:`./../content/number${i}.png`,
                time: (1000 * sec),
                x:x,
                y:y,
                heightMode:"native",
                widthMode:"native",
            })
        }
        return listWithContent
    }

    const canvas = getCanvas()
    timeStamp("canvas created")

    canvas.createLayer([{contentType:"video",path:"./../content/MeEnteringUnauthorizedZoneAtWork.webm",heightMode:"canvasSize",widthMode:"canvasSize"}])
    timeStamp("added background video")

    let y = 250

    canvas.createLayer(getLayerList("75%",y,1))
    canvas.getLayer(1).setMode = "timer"

    canvas.createLayer(getLayerList("50%",y,10))
    canvas.getLayer(2).setMode = "timer"

    canvas.createLayer(getLayerList("25%",y,100))
    canvas.getLayer(3).setMode = "timer"

    canvas.createLayer(getLayerList("0%",y,1000))
    canvas.getLayer(4).setMode = "timer"

    addingHomepageButton(canvas)
    timeStamp("added home button")

    await canvas.startAsync()
    timeStamp("canvas started")

    console.log(canvas,"done")
    window.addEventListener("mousedown",async (e)=>{
        /*
        console.log(canvas.getLayer(1))
        console.log(canvas.getLayer(2))
        console.log(canvas.getLayer(3))
        console.log(canvas.getLayer(4))
        */
        e.preventDefault
    })
})