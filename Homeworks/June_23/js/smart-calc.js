function Calculator() {
    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = function(str) {
        let num1 = Number(str.split(" ")[0]); // Extracts first number
        let num2 = Number(str.split(" ")[2]); // Extracts second number
        let oper = str.split(" ")[1]; //Extracts operator
        for (let key in operators) {
            if (key == oper) return operators[key](num1, num2);
        }
        return "Unknown operation";
    };
    this.addOperator = function(name, func) {
        operators[name] = func;
    };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addOperator("*", (a, b) => a * b);
powerCalc.addOperator("/", (a, b) => a / b);
powerCalc.addOperator("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8