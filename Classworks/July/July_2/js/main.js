// Object destructuring
// data-* // new attribute type in HTML !important
// className, classList
// attr.nodeName, .nodeValue
// .toggle()
// .forEach()





/* 
let a = document.querySelector('a');

// console.log(a.constructor.name);

// console.log(a.tagName);

let textarea = document.createElement('textarea');
document.body.appendChild(textarea);

let br = document.createElement('br');
document.body.insertBefore(br, textarea);
// console.log(a.attributes);

let atts = Array.from(a.attributes);

// atts.forEach((attr) => {
//     console.log(`${attr.nodeName}=${attr.nodeValue}`);
// });


textarea.setAttribute('rows', 10);
textarea.setAttribute('cols', 50);
textarea.style.resize = 'none';

// console.log(textarea.getAttribute('style'));

// console.log(a.className);

// a.className += ' a-style'; // !important

// console.log(a.classList);
a.classList.add('a-style');
// console.log(a.classList.contains('a-style'));

// a.addEventListener('dbclick', ({ target }) => {
//     a.classList.toggle('a-style');
// }) // this doesn't work !important

// console.log(a.dataset);
a.dataset.count = 1; // !important

a.addEventListener('click', (event) => {
    let count = parseInt(event.target.dataset.count);
    if (count <= 4) {
        event.preventDefault(); // !important
        event.target.dataset.count = count + 1;
    }
    a.classList.toggle('a-style');
})


// textarea.removeAttribute('rows');
// textarea.removeAttribute('cols');
// console.log(textarea.hasAttribute(''))


let input = document.querySelector("#name");

// console.log(input.value);
// input.value = '';
 */








/* Object destructuring */

let object = { name: 'oho name', age: 80 };

// let {name, age} = object;
// console.log(name,age);

// let {name: x , age: y} = object; //renaming object properties !important
// console.log(x,y);

let deepObj = {
    innerObj: {
        deep: 'Deep Property',
        wow: true,
    }
}


let { innerObj: { deep: myDeep, wow: myWow } } = deepObj;
// console.log(myDeep, myWow);

let { no } = object;
// console.log(no);


let num1 = 7,
    num2 = 13;

[num1, num2] = [num2, num1] // !important

// console.log(num1);

let key = 'name';

let {
    [key]: myName
} = object; // !important

// console.log(myName);

// let {def = 8} = {def: 13}; // default values // !important 
// let {def = 8} = {def: undefined}; // default values // !important
// console.log(def);

// let [, , k, l] = [1, 2, 3, 4, 5];
// console.log(k,l);

function greet({ age, name: greeting = 'Person' }) {
    console.log(`${greeting} is ${age} years old`);
}

greet({ name: 'john', age: 22 });


function getCoords() {
    return {
        x: 43,
        y: 41
    }
}

let { x, y } = getCoords();

console.log(x, y);