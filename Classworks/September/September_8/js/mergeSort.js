function mergeSort(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }
    const length = numbers.length;
    const middle = Math.floor(length / 2);
    const left = numbers.slice(0, middle);
    const right = numbers.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArray = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return sortedArray.concat(left, right);
}

let toSort = [1, 4, 6, 5, 7, 8, 9];
console.log(mergeSort(toSort));