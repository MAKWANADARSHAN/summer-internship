function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3, sqrt = Math.sqrt(n); i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(6));