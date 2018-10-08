let calculator = {
    value1: 0,
    value2: 0,
    read() {
        this.value1 = Number(prompt("Enter a number"));
        this.value2 = Number(prompt("Enter a number"));
    },
    sum() {
        return this.value1 + this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    }
}

calculator.read();
alert(calculator.sum())
alert(calculator.mul());