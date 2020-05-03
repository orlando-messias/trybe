
// usual implementation
const fatorial = (n) => {
    if (n === 0) return 1;
    for (let i = n - 1; i > 0; i -= 1) {
        n *= i;
    }
    return n;
}


// recursivity
const fat = n => (n === 0) ? 1 : n * fat(n-1);
