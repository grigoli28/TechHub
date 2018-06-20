function checkAge(age, granted, denied) {
    if (age < 18) denied();
    else granted();
}

let age = prompt('What is your age?', 18);

checkAge(age,
    () => alert('Access granted'),
    () => alert('Access denied'));