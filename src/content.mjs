const alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"

function displayImage(file){
    const image = new Image(file)
    image.style = 'width:100%'
    image.src = file
    div.appendChild(image)
}
function displayVideo(file){
    const videoDiv = getBasicDiv(file)
    const video = document.createElement('video')
    video.muted = false
    video.autoplay = true
    video.loop = true
    video.controls = true
    video.src = file
    videoDiv.appendChild(video)
    div.appendChild(videoDiv)
}
function displayFont(file){
    let fontDiv = getBasicDiv(file)
    let pUpperCase = document.createElement('P')
    let pLowerCase = document.createElement('P')
    pUpperCase.textContent = alphabet
    pLowerCase.textContent = alphabet
    fontDiv.appendChild(pUpperCase)
    fontDiv.appendChild(pLowerCase)
    div.appendChild(fontDiv)
}
function getBasicDiv(file){
    const div = document.createElement('DIV')
    const h1 = document.createElement('H1')
    h1.innerText = file
    div.appendChild(h1)
    div.appendChild(document.createElement('HR'))
    return div
}

const div = document.createElement('DIV')

window.addEventListener("load",async ()=>{
    const listOfContent = await fetch("./content.json",{method:"GET",headers:{'Content-Type':'application/json'}}).then((res)=>{return res.json()})
    listOfContent.forEach(file => {
        switch(file.split('.').pop()){
            case "png":
                displayImage(file)
            break
            case "webm":
                displayVideo(file)
            break
            case "ttf":
                displayFont(file)
            break
            default:
            break
        }
    })
    document.body.appendChild(div)
})