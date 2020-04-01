
function highestIndexValue(arrayInt){
    let highestValue = arrayInt[0]
    for(let i=0; i<arrayInt.length; i++){
        if(arrayInt[i] > highestValue)
            highestValue = arrayInt[i]
    }
    console.log(arrayInt.indexOf(highestValue))
}

highestIndexValue([2, 3, 22, 7, 10, 1])

