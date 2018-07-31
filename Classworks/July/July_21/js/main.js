/* ID is considered as window 's property !important
console.log(<id>)
// getElementsBy*
// querySelector | querySelectorAll
// live collection
// innerText vs textContent
*/

let myWow = document.getElementById('wow');
myWow.style.padding = '20px';
myWow.style.color = 'white';
myWow.style.backgroundColor = 'seagreen';
myWow.style.marginBottom = '15px';


let divs = document.getElementsByTagName('div');
// console.log(divs.wow); // wow is property in this case !important

// for (let div of divs) {
//     console.log(div)
// }

let menus = document.getElementsByClassName('menu');

// for (let menu of menus) {
//     console.log(menu)
// }


let ps = document.getElementsByName('p');

// for (let key of ps.entries()) {
//     console.log(key)
// }



// let elements = document.querySelectorAll('ul.menu > li:last-child');
// elements.forEach(el => {
//     el.style.backgroundColor = 'red';
//     el.style.padding = '10px';
//     el.style.color = 'white';
//     el.style.fontWeight = '900';
//     console.log(el)
// })


// let element = document.querySelector('ul:first-of-type');
// console.log(element);


// console.log(document.body.constructor.name);
// !important
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);


// username.addEventListener('input', ({target}) => {
//     result.textContent = target.value;
// })

username.addEventListener('input', updateText);
lastname.addEventListener('input', updateText);

function updateText({ target }) {
    // result.textContent = target.value;
    // console.log(target.dataset.change)
    let toChange = document.querySelector(`#${target.dataset.change}`);
    toChange.textContent = target.value;
}

document.body.info = {
    name: "Body Info",
    title: "HTML5",
}

Element.prototype.whoAmI = function() {
        console.log(`I am - <${this.tagName.toLowerCase()}> tag`);
    }
    // document.body.whoAmI();
    // console.log(document.body.info.title);

// element.hasAttribute(name)
// element.getAttribute(name)
// element.setAttribute(name, value)
// element.removeAttribute(name)

myWow.setAttribute('class', 'wow__class wow__class--item')
    // console.log(myWow.hasAttribute('class'))
    // console.log(myWow.getAttribute('id'))
    // console.log(myWow)
    // myWow.removeAttribute('class')
    // console.log(myWow)

// console.log(myWow.attributes)
for (let attr of myWow.attributes) {
    // console.log(attr.name, attr.value)
}

// console.log(myWow.style.marginBottom)

// className, classList
// console.log(myWow.className)
myWow.classList.add('custom--class')
    // myWow.classList.contains('custom--class')
    // myWow.classList.remove('custom--class')
    // classList.toggle()

console.log(myWow.marginTop)

let computed = getComputedStyle(myWow);

console.log(computed.marginLeft)