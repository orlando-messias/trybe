// print a pyramid of asterisks

let n = 5;
let blankSpace = '';
let asterisk = '';


for(let i=1; i<=n; i++){
    for(let j=i; j<n; j++){
        blankSpace += ' ';
    }
    if(i === 1)
        asterisk += '*';
    else
        asterisk += '**';
    console.log(blankSpace + asterisk);
    blankSpace = '';
}

