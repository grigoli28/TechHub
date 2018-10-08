function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

/* function bubbleSort(arr) {
    do {
        var isSorting = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorting = true;
            }
        }
    }
    while (isSorting);
} */



let toSort = [-1, 2, 35, 7, 89, 76, 3, 67, 54, 43, 5];
bubbleSort(toSort)
console.log(toSort);