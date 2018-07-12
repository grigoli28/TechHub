function inBetween(start, end) {
    return function(num) {
        if (num >= start && num <= end)
            return true;
    }
}

function inArray(arr) {
    return function(num) {
        if (arr.includes(num))
            return true;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6)));
alert(arr.filter(inArray([1, 2, 10])));