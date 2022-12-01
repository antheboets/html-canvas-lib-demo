function displayImage(file){
    const image = new Image(file)
    image.src = file
    image.onload = ()=>{
        div.appendChild(image)
    }
}
function displayVideo(file){

}
function displayFont(file){
    let fontDiv = document.createElement('DIV')
    let pUpperCase = document.createElement('P')
    let pLowerCase = document.createElement('P')
    fontDiv.appendChild(pUpperCase)
    fontDiv.appendChild(pLowerCase)
    div.appendChild(fontDiv)
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