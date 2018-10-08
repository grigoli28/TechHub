let n = Number(prompt("Enter a number"));
for (let i = 1; i <= (n ** 2); i++) {
    document.writeln("*");
    if (i % n == 0)
        document.writeln("<br>");
}