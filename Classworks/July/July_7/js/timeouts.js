function printNumbers(from, to) {
    let intID = setInterval(() => {
        alert(from);
        if (from == to) clearInterval(intID);
        from++;
    }, 1000);
}

function printNumbers(from, to) {
    let current = from;
    setTimeout(function go() {
        alert(current);
        if (current < to) setTimeout(go, 1000);
        current++;
    }, 1000);
}


// printNumbers(1, 5);