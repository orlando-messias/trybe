// Shows the greater number between two numbers

let num1 = 30; num2 = 402; num3 = 52; greater = 0;
if((num1 > num2) && (num1 > num3))
    greater = num1;
else if((num2 > num1) && (num2 > num3))
    greater = num2;
else
    greater = num3;

console.log('Greater number is ' + greater)