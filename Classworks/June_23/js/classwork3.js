function Calculator() {
    this.add = "+";
    this.sub = "-";
    this.mul = "*";
    this.div = "/";
    this.pow = "**";
    this.calculate = function(str) {
        if (-1 != str.indexOf(this.add)) {
            let nums = str.split(this.add);
            let a = Number(nums[0]);
            let b = Number(nums[1]);
            return a + b;
        }
        if (-1 != str.indexOf(this.sub)) {
            let nums = str.split(this.sub);
            let a = Number(nums[0]);
            let b = Number(nums[1]);
            return a - b;
        }
    }
    this.addMethod = function addOperator(name, func) {
        if (posPlus != -1) {
            let nums = str.split('+');
            let a = Number(nums[0]);
            let b = Number(nums[1]);
            return func(a, b);
        }
        if (posMin != -1) {
            let nums = str.split('-');
            let a = Number(nums[0]);
            let b = Number(nums[1]);
            return func(a, b);
        }
        if (posMin != -1) {
            let nums = str.split('-');
            let a = Number(nums[0]);
            let b = Number(nums[1]);
            return func(a, b);
        }
    }
}



let calc = new Calculator();
alert(calc.calculate("3 + 7"));

// let powerCalc = new Calculator();
// powerCalc.addOperator("*", (a, b) => a * b);
// powerCalc.addOperator("/", (a, b) => a / b);
// powerCalc.addOperator("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert(result);