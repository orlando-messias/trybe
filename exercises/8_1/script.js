
// usual implementation
const fatorial = (n) => {
    if (n === 0) return 1;
    for (let i = n - 1; i > 0; i -= 1) {
        n *= i;
    }
    return n;
}


// recursivity
const fat = n => (n === 0) ? 1 : n * fat(n-1);


// function return the longest word
const longestWord = (word => {
    word = word.replace(/\.|\,/g, '')  // remove . and , characters
    console.log(word)
    let arrayWords = word.split(' ');
    let longest_word = '';
    arrayWords.forEach(w => {
        if (w.length > longest_word.length)
            longest_word = w;
    });
    return longest_word;
});


// script exercise 03
const btn = document.getElementById('click-to-count');
const inputCount = document.getElementById('count');
var clickCount = 0; 
btn.addEventListener('click', () => {
    event.preventDefault();
    clickCount ++;
    inputCount.value = clickCount;
});


// exercise 04
const skills = ['HTML', 'CSS', 'Javascript', 'NodeJS'];

const replaceSpot = str => {
    let phrase = `
    Triber x aqui!
    Tudo bem?`

    phrase = phrase.replace('x', str)
    return phrase;
}

function concatAll(fun, str){
    return `${fun(str)} 
    Minhas 05 habilidades são: 
    ${skills.sort()}
    #goTrybe`;
}

// calling the function
concatAll(replaceSpot, 'Student sd04')
