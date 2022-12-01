window.addEventListener("load",async ()=>{
    const listOfContent = await fetch("./content.json",{method:"GET",headers:{'Content-Type':'application/json'}}).then((res)=>{return res.json})
    console.log(listOfContent)
})