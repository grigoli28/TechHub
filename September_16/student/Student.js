const simpleStatistics = require('simple-statistics');

module.exports = class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    addGrade(grade) {
        if (!this.grades) {
            this.grades = [];
        }
        this.grades.push(grade);
    }

    computeGradesAverage() {
        return simpleStatistics.mean(this.grades);
    }
}