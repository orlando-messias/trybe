let isPalindrome = false;
let newWord = '';
let countEqual = 0;

function verifyPalindrome(word){
    let verifyWord = word.split('')
    let verifyWordCopy = word.split('')
    let reverseWord = verifyWord.reverse();
    for(let i=0; i<word.length; i++){
        if(verifyWordCopy[i] === reverseWord[i])
            countEqual++
    }
    if(countEqual === word.length)
        isPalindrome = true
    return isPalindrome
}

console.log(verifyPalindrome('araras'))