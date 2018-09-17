/* Regular and Tail recursions !important */




/* function add() {
    let s = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            s += i * j;
        }
    }
}
 */

/* function recursiveCount(max, current) {
    if (current > max) {
        return;
    }
    console.log(current);
    recursiveCount(max, ++current);
}

recursiveCount(10, 1);


function fibonnaci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonnaci(n - 1) + fibonnaci(n - 2);
    }
}

for (let i = 1; i < 12; i++) {
    console.log(`i - ${i}, num - ${fibonnaci(i)}`);
} */





/* 
function factoreal(n) {
    if (n === 0) return 1;
    return n * factoreal(n - 1);
}


console.log(factoreal(0));
console.log(factoreal(6)); */



function addNumbers(number) {
    if (number === 0) {
        return number;
    } else {
        return number + addNumbers(number - 1);
    }
}



// console.log(addNumbers(3));
/* 3 + addNumbers(2)
3 + 2 + addNumbers(1)
3 + 2 + 1 */



function tailAddNumbers(number, sum = 0) {
    if (number === 0) {
        return sum;
    } else {
        return tailAddNumbers(number - 1, sum + number);
    }
}

// console.log(tailAddNumbers(5));
/* tailAddNumbers(3, 0);
tailAddNumbers(2, 3);
tailAddNumbers(1, 5);
tailAddNumbers(0, 6); */