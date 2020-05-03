
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
