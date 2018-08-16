/* let input = document.querySelector('#input');
let countBtn = document.querySelector('#count');


countBtn.addEventListener('click', function count(e) {
    let text = input.value;
    let sentenceExp = /[\w\s]+(?=[\.!?;])/gi;
  

    let letterExp = /[a-z]/gi;
    let letterCount = text.match(letterExp);

    let wordExp  = /[a-z]+(?=[\s,\.;!?])/gi;
    let wordCount = text.match(wordExp);

    let numbersExp = /\d/g;
    let numberCount = text.match(numbersExp);
  console.log(text.match(sentenceExp))


  let generalExp = /(?=)/;
}); */



let addBtn = document.querySelector('#add');
let input = document.querySelectorAll('#input');

addBtn.addEventListener('click', function(e) {
    let child = document.createElement('div');
    child.classList.add('listener');
    document.body.appendChild(child);
    observer.init();
    observer.sourceInput.addEventListener('keyup', function() {
        observer.add(3, function(elem) {
            elem.style.backgroundColor = 'seagreen';
        });
    });
});


function Observer() {
    this.sourceInput = document.querySelector('#subject');
    this.sourceData = [];
    this.listeners = [];
}

Observer.prototype.init = function() {
    this.listeners = document.querySelectorAll('.listener');
    this.sourceData.length = this.listeners.length;
}

Observer.prototype.update = function(index, func) {
    for (let i = 0; i < this.sourceData.length; i++) {
        if (this.sourceData[i] != undefined) {
            this.listeners[i].innerHTML = this.sourceData[i] || '';
        }
    }
    if (func) {
        let currentElement = this.listeners[index];
        func(currentElement);
    }
}

Observer.prototype.add = function(index, func) {
    this.sourceData[index] = this.sourceInput.value;
    this.update(index, func);
}

const observer = new Observer();
observer.init();



observer.sourceInput.addEventListener('keyup', function() {
    observer.add(0);
    observer.add(1, function(elem) {
        elem.style.backgroundColor = 'red';
    });
    observer.add(2, function(elem) {
        elem.style.backgroundColor = 'yellow';
    });
});