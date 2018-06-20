function isPrime(n) {
    let counter = 0;
    for (let i = 2; i <= Math.round(n / 2); i++) {
        if (n % i == 0)
            ++counter;
    }
    if (counter > 0) return false;
    else return true;
}

let n = Number(prompt("Enter a number"));
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}