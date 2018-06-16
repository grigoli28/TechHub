"use strict";

let year = Number(prompt("Enter a year"));
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    alert(`${year} IS a leap year!`);
} else {
    alert(`${year} IS NOT a leap year`);
}