const assert = require('assert');

function isAbove(num1, num2) {
    return num1 > num2;
}

assert.strictEqual(isAbove(5, 6), false);

assert.strictEqual(isAbove(20, 18), true);