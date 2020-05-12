const assert = require('assert');

function myIndexOf(arr, item){
    let searchedIndex = -1;

    for (let i = 0; i < arr.length; i += 1) {
        if (item === arr[i]) {
            searchedIndex = i;
        }
    }
    return searchedIndex;
}

assert.strictEqual(myIndexOf([1, 2, 3, 4], 3), 2, 'Position of array must be 2');

assert.strictEqual(myIndexOf([1, 2, 3, 4], 5), -1, "There's no item");