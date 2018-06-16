let x;
do {
    x = Number(prompt("Enter a number"));
    if (isNaN(x))
        alert("Error! Try Again!");
} while (isNaN(x));