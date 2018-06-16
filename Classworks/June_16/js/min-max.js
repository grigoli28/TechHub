let min = Number(prompt("Enter a min number of segment"));
let max = Number(prompt("Enter a max number of segment"));
min = (min % 2 == 1) ? ++min : min;
max = (max % 2 == 1) ? --max : max;
for (; min <= max; min += 2) {
    document.writeln(min);
}