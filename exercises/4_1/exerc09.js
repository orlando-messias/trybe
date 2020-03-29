// returns if one variable or more between three other variables are even

let num1 = 7; num2 = 16; num3 = 11;
let even = false;

if((num1 % 2 == 0) || (num2 % 2 == 0) || (num3 % 2 == 0))
    even = true;
else
    even = false;

console.log(even)