// returns if one variable or more between three other variables are odd

let num1 = 22; num2 = 16; num3 = 51;
let odd = false;

if((num1 % 2 != 0) || (num2 % 2 != 0) || (num3 % 2 != 0))
    odd = true;
else
    odd = false;

console.log(odd)