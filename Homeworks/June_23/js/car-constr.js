function Car() {
    this.name = "Unset";
    this.color = "Unset";
    this.brand = "Unset";
    this.setName = function(str) {
        this.name = str;
    };
    this.setColor = function(str) {
        this.color = str;
    };
    this.setBrand = function(str) {
        this.brand = str;
    };
    this.save = function() {
        alert(`Saving ${this.name}, Color - ${this.color}, Brand - ${this.brand}...`);
    };
}

let car = new Car();
car.setName('Jetta');
car.setColor('Platinum Gray Metallic');
car.setBrand('VW');
car.save();