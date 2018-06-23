let salaries = {
    John: 100,
    Ann: 160,
    Peter: 130
}

let sum = 0;

for (let val in salaries) {
    sum += salaries[val];
}

alert(`Sum of all salaries: ${sum}`);