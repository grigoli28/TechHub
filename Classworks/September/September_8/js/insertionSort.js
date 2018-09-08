function insertionSort(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numbers[i] < numbers[j]) {
                let removed = numbers.splice(i, 1)[0];
                numbers.splice(j, 0, removed);
            }
        }
    }
}


/* function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        while (arr[i] < arr[j] && j > 0) {
            j--;
        }
        arr.splice(j, 0, arr[i]);
    }
} */


let toSort = [-1, 2, 35, 7, 89, 76, 3, 67, 54, 43, 5];
insertionSort(toSort);
console.log(toSort);