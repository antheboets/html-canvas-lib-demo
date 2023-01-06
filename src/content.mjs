const alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
const div = document.createElement('DIV')
const defaultFont = 'Courier New'

function displayImage(file,div){
    const image = new Image(file)
    image.style = 'width:auto'
    image.src = file
    div.appendChild(image)
    div.className = 'image'
}
function displayVideo(file,div){
    const video = document.createElement('video')
    video.muted = false
    video.autoplay = true
    video.loop = true
    video.controls = true
    video.src = file
    div.appendChild(video)
    div.className = 'video'
}
function displayFont(file,div){
    let pUpperCase = document.createElement('P')
    let pLowerCase = document.createElement('P')
    let fontName = file.split('/').at(-1).split('.')[0]
    const font = new FontFace(fontName,`url(${file})`)
    font.load().then((loadedFont)=>{
        document.fonts.add(loadedFont)
        pUpperCase.style.fontFamily = fontName
        pLowerCase.style.fontFamily = fontName
    }).catch((error)=>{
        console.log(error)
        pUpperCase.style.fontFamily = defaultFont
        pLowerCase.style.fontFamily = defaultFont
    })
    pUpperCase.textContent = alphabet.toUpperCase()
    pUpperCase.style.fontSize = '5em'
    pUpperCase.style.marginTop = '0.2em'
    pUpperCase.style.marginBottom = '0.2em'
    pLowerCase.textContent = alphabet.toLowerCase()
    pLowerCase.style.fontSize = '5em'
    pLowerCase.style.marginTop = '0.2em'
    pLowerCase.style.marginBottom = '0.2em'
    div.appendChild(pUpperCase)
    div.appendChild(pLowerCase)
    div.className = 'font'
}
function getBasicDiv(file){
    const div = document.createElement('DIV')
    const header = document.createElement('H2')
    header.innerText = file
    div.appendChild(header)
    div.appendChild(document.createElement('HR'))
    return div
}


window.addEventListener("load",async ()=>{
    const listOfContent = await fetch("./content.json",{method:"GET",headers:{'Content-Type':'application/json'}}).then((res)=>{return res.json()})
    listOfContent.forEach(file => {
        const baseDiv = getBasicDiv(file)
        switch(file.split('.').pop().toLowerCase()){
            case "png":
                displayImage(file,baseDiv)
            break
            case "webm":
                displayVideo(file,baseDiv)
            break
            case "svg":
            case "eot":
            case "woff":
            case "woff2":
            case "ttf":
                displayFont(file,baseDiv)
            break
            default:
            break
        }
        div.appendChild(baseDiv)
    })
    document.body.appendChild(div)
})