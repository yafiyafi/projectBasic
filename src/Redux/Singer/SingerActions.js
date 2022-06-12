export function LoadGetAllSingers(items){
    debugger
    console.log(items)
    return {type:"LOAD_GET_ALL_SINGERS",payload:items}
}

export function UpdateSinger(item) {
    return { type: "UPDATE_SINGER", paylod: item };
}