function isPrime(n) {
    let counter = 1;
    for (let i = 2; i < Math.round(n / 2); i++) {
        if (n % i == 0)
            ++counter;
    }
    if (counter > 2) return false;
    else return true;
}

let n = Number(prompt("Enter a number"));
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}