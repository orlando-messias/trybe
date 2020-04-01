
function mostRepeated(arrayInt){
    let countRepeat = 0; mostRepeat = 0; positionIndex = null
    for(let i=0; i<arrayInt.length; i++){
        for(let j=0; j<arrayInt.length; j++){
            if(arrayInt[i] == arrayInt[j])
                countRepeat += 1
        }
        if(countRepeat > mostRepeat){
            mostRepeat = countRepeat
            positionIndex = i
        }
        countRepeat = 0
    }
    return arrayInt[positionIndex]
}

console.log('Most repeated number ', mostRepeated([2, 3, 2, 5, 8, 2, 3]))