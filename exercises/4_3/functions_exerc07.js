
function verifyEnding(word, ending){
    let endingWord = ''
    let endingLength = ending.length
    let verifyEndingWord = word.length - endingLength
    for(let i=verifyEndingWord; i<word.length; i++){
        endingWord += word[i]
    }
    if(endingWord == ending)
        return true
    else   
        return false
}

console.log(verifyEnding('caracol', 'col'))