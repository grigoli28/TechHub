let num = Number(prompt("Enter a number"));
let sum = 0;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10); //  parseInt(num / 10)
}
alert(`Sum is ${sum}`);