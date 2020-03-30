// print a pyramid of asteriks

let n = 5;
let blankSpace = '';
let asterisk = '*';
let middle = parseInt(n / 2);  // defines the middle of the first asterisk

for(let i=0; i<=middle; i++){  // repeat asterisks considering the middle of the pyramid
    for(let j=i; j<=middle; j++){  // repeat blank spaces considering the middle of the pyramid
        blankSpace += ' ';
    }
    console.log(blankSpace + asterisk)
    blankSpace = '';
    asterisk += '**';  // every new line add 2 new asterisks
}
