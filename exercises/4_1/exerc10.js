// calculating profits

let purchasePrice = 30;
let salesPrice = 50;
let profits = 0;

if(purchasePrice > 0 && salesPrice > 0)
    profits = (salesPrice - purchasePrice) * 1000 * 0.8;

console.log(profits);