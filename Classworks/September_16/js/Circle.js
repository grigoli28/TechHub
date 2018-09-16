module.exports = class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.round(Math.PI * Math.pow(this.radius, 2) * 10) / 10;
    }
}