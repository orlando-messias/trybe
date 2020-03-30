
function biggerName(arrayNames){
    let biggerName = arrayNames[0]
    for(let i=0; i<arrayNames.length; i++){
        if(arrayNames[i].length > biggerName.length)
            biggerName = arrayNames[i]
    }
    
    return biggerName
}

console.log('Bigger Name is ', biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

