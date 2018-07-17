function Car() {
    this.name = "";
    this.color = "";
    this.brand = "";
    this.setName = function(str) {
        this.name = str;
        return this;
    };
    this.setColor = function(str) {
        this.color = str;
        return this;
    };
    this.setBrand = function(str) {
        this.brand = str;
        return this;
    };
    this.save = function() {
        alert(`Saving ${this.name}, Color - ${this.color}, Brand - ${this.brand}...`);
    };
}

let car = new Car()
    .setName('Jetta')
    .setColor('Platinum Gray Metallic')
    .setBrand('VW')
    .save();