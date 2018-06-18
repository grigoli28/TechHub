function pow(x, n) {
    if (n % 1 != 0 || n < 1) {
        return;
    }
    let acc = 1;
    for (let i = 0; i < n; i++) {
        acc *= x;
    }
    return acc;
}

let x = Number(prompt("Enter a number"));
let n = Number(prompt("Enter a number to power"));
let ans = pow(x, n);

if (!ans) {
    alert("Error! Try again");
} else
    alert(`${x} power to ${n} equals: ${ans}`);