let sumInput = function() {
    let nums = [];
    while (true) {
        let n = prompt("Enter a number");
        if (n == null || n == "" || isNaN(n)) break;
        n = Number(n);
        nums.push(n);
    }
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    document.writeln(sum);
}
sumInput();