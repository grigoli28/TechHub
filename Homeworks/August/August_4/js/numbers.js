let numberDiv = document.querySelector('#numbers');

let shuffle = document.querySelector('#shuffle');
let ascending = document.querySelector('#ascending');
let descending = document.querySelector('#descending');


let numberCount = 150;
let numbersArr = [];

for (let i = 1; i < numberCount; i++) {
    numbersArr.push(i);
}

printNumbers(numberDiv, numbersArr);

numberDiv.addEventListener('click', function removeNum({ target }) {
    if (target.nodeName.toLowerCase() == 'span') {
        let index = numbersArr.indexOf(Number(target.textContent));
        numbersArr.splice(index, 1);
        target.remove();
    }
});


shuffle.addEventListener('click', function shuffle() {
    for (let i = 0; i < numbersArr.length; i++) {
        let rand1 = Math.floor(Math.random() * numbersArr.length);
        let rand2 = Math.floor(Math.random() * numbersArr.length);
        [numbersArr[rand1], numbersArr[rand2]] = [numbersArr[rand2], numbersArr[rand1]]
    }
    updateNumbers(numberDiv, numbersArr);
});


ascending.addEventListener('click', function ascending() {
    numbersArr.sort((a, b) => a - b);
    updateNumbers(numberDiv, numbersArr);
});


descending.addEventListener('click', function descending() {
    numbersArr.sort((a, b) => b - a);
    updateNumbers(numberDiv, numbersArr);
});


function updateNumbers(elem, arr) {
    let clone = [...arr];
    for (let item of elem.children) {
        item.textContent = clone.shift();
    }
}


function printNumbers(elem, arr) {
    let clone = [...arr];
    while (clone.length) {
        let span = document.createElement('span');
        span.classList.add('number');
        span.textContent = clone.shift();
        elem.appendChild(span);
    }
}