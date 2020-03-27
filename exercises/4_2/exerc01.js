// print a square of asterisks

let n = 5;
let asterisks = '';

for(let i=1; i<=n; i++){
    asterisks = '';
    for(let j = 1; j<=n; j++){
        asterisks += '*';
    }
    
    console.log(asterisks);
}