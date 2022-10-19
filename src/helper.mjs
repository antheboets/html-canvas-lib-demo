
const domLoadedTimestamp = new Date()

function debugTimeStamp(){
    return `${(new Date()-domLoadedTimestamp) / 1000} Sec`
}

export function timeStamp(debugStr){
    console.log(debugStr,`${debugTimeStamp()}`)
}

export function randomNumber(min = 0 , max = 99){
    return Math.floor(Math.random() *(max - min) + min)
}