function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += Number(prompt("Enter a number"));
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);