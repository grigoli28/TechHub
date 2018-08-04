let numbersDiv = document.querySelector('#numbers');

let numberCount = 150;

let shuffle = document.querySelector('#shuffle');
let ascending = document.querySelector('#ascending');
let descending = document.querySelector('#descending');


let count = 150;
let numbers = [];


// numbersDiv.addEventListener('click', function remove({ target }) {
//     if (target.nodeName.toLowerCase() == 'span')
//         target.remove();
// })


for (let i = 1; i < count; i++) {
    numbers.push(i);
    let span = document.createElement('span');
    span.classList.add('number');
    span.textContent = i;
    numbersDiv.appendChild(span);
}


shuffle.addEventListener('click', function shuffle() {

    


});




ascending.addEventListener('click', function ascending() {
    numbers.sort((a, b) => a - b);
    updateNumbers();
});

descending.addEventListener('click', function descending() {
    numbers.sort((a, b) => b - a);
    updateNumbers();
});

function updateNumbers() {
    let spans = document.querySelectorAll('.number');
    for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = numbers[i];
    }
}