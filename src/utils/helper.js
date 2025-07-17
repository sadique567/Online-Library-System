export const findPrimeNumber = (num) => {
    if (num === 1) return 2;
    let primes = [2];
    let n = 3;

    const isPrime = (n) => {
        let limit = Math.sqrt(n);
        for (let i = 0; i < primes.length; i++) {
            let p = primes[i];
            if (p > limit) break;
            if (n % p === 0) return false;
        }
        return true;
    };

    while (primes.length < num) {
        if (isPrime(n)) {
            primes.push(n);
        }
        n += 2; 
    }

    return primes[num - 1];
};
