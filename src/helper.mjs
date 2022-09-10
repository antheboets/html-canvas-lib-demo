
const domLoadedTimestamp = new Date()

function debugTimeStamp(){
    return `${(new Date()-domLoadedTimestamp) / 1000} Sec`
}

export function timeStamp(debugStr){
    console.log(debugStr,`${debugTimeStamp()}`)
}