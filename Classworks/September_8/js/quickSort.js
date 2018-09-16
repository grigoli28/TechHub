function quickSort(numbers) {
    if (numbers.length <= 1) return numbers;
    const pivot = numbers[numbers.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < pivot) {
            left.push(numbers[i]);
        } else {
            right.push(numbers[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let toSort = [-1, 2, 35, 7, 89, 76, 3, 67, 54, 43, 5];
console.log(quickSort(toSort));