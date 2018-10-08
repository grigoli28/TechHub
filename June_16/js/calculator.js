let a = Number(prompt("Enter a number"));
let b = Number(prompt("Enter a number"));
let s;
let o = prompt("Enter an operator");

switch (o) {
    case "+":
        s = a + b;
        alert(s);
        break;

    case "-":
        s = a - b;
        alert(s);
        break;

    case "*":
        s = a * b;
        alert(s);
        break;

    case "/":
        s = a / b;
        alert(s);
        break;

    default:
        alert("Incorrect operator");
        break;
}