function Calculator() {
    this.operator = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.chooseCoorect = function(str, n, m) {
        switch (str) {
            case "+":
                return this.operator["+"];
            case "-":
                return this.operator["-"];
            case "*":
                return this.operator["*"];
            case "/":
                return this.operator["/"];
            case "**":
                return this.operator["**"];
        }
    };
    this.calculate = function(str) {
        let num1 = Number(str.split(" ")[0]); // Extracts first number
        let num2 = Number(str.split(" ")[2]); // Extracts second number
        let oper = str.split(" ")[1]; //Extracts operator
        return this.chooseCoorect(oper)(num1, num2);
    };
    this.addOperator = function(name, func) {
        this.operator[name] = func;
    };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addOperator("*", (a, b) => a * b);
powerCalc.addOperator("/", (a, b) => a / b);
powerCalc.addOperator("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);