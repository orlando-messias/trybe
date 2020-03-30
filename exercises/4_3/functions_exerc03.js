
function lowestIndexValue(arrayInt){
    let lowestValue = arrayInt[0]
    for(let i=0; i<arrayInt.length; i++){
        if(arrayInt[i] <= lowestValue)
            lowestValue = arrayInt[i]
    }
    return arrayInt.indexOf(lowestValue)
}

console.log('Index of the lowest value ', lowestIndexValue([16, 5, 6, 2, 10, 12]))

