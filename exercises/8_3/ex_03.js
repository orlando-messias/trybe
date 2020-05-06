const assert = require('assert');

function mySum(arr){
    let result = 0;
    for (let item in arr) {
        result += arr[item];
    }
    return result;
}

assert.strictEqual(mySum([1, 2, 3, 4]), 10, 'Sum of items must return 10');

assert.strictEqual(mySum([1, -2, -3, 4]), 0, 'Sum of items must return 0');