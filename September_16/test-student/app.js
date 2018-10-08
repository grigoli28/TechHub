const Student = require('../student/Student');

let stud = new Student(3,'Grigol', 19);

stud.addGrade(1);
stud.addGrade(2);
stud.addGrade(3);
stud.addGrade(4);
stud.addGrade(5);

console.log(stud.computeGradesAverage());