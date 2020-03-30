// verify if the value of the variable is a prime number

let num = 24;
let primeNumber = 0;
let isPrimeNumber = false;

if(num == 1) 
    isPrimeNumber = true;
else{
    for(let i=2; i<num; i++){  // testing dividing variable num to every number till the one before num
        if(num % i === 0){ 
            primeNumber = i;
        }
        if(primeNumber == 0)
            isPrimeNumber = true;
    }
}
console.log(isPrimeNumber);