/*  */
// string.includes()
// string.startsWith()
// string.endsWith()
// string.trim()
// string.substring()
// string.substr()
// document.querySelector()
// Array.from()
// Array.sort()
// Element.matches()


/*  
let str = "my string example";

console.log(str.includes('my'));
console.log(str.startsWith('example'));
console.log(str.endsWith('ple'));

let arr = [1, 2, 3, ];

let clone1 = arr; // clone with refference
let clone2 = arr.slice(); // clone without refference

console.log(clone1 === arr);
console.log(clone2 === arr);

let sliced = str.slice(0, 3);
console.log(`sliced: ${sliced.trim()}`);

let subString = str.substring(0, 6);
console.log(`substring: ${subString}`);


let subStr = str.substr(0, 3);
console.log(`substr: ${subStr}`);
*/








/* DOM 
DOCUMENT_NODE - window.document/document
ELEMENT_NODE - <body> <a> <p> ...
ATTRIBUTE_NODE - class="ohooo"
TEXT_NODE - any text or space between elements in the file.
DOCUMENT_TYPE_NODE - <!DOCTYPE html>
DOCUMENT_FRAGMENT_NODE - document.createDocumentFragment()

// console.log(Node.ELEMENT_NODE)
// console.log(Node.ATTRIBUTE_NODE)
// console.log(Node.TEXT_NODE)


Node Properties:

    childNodes
    firstChild
    lastChild
    nextSibling
    previousSibling
    nodeName
    nodeType
    nodeValue
    parentNode

Node Methods:

    appendChild(node)
    cloneNode()
    contains(node)
    hasChildNodes()
    insertBefore(node)
    isEqualNode()
    removeChild(node)
    replaceChild(node)


Document Methods:

    document.createElement('tag')
    document.createTextNode('string')

HTML*Element Properties:

    innerHTML
    outerHTML
    textContent // converts inner HTML to String
    innerText
    outerText
    firstElementChild
    lastElementChild
    nextElementChild
    previousElementChild
    children
*/




// Object > Node > Element > HTML*Element

// HTMLAnchorElement - nodeAnchor
// let nodeAnchor = document.querySelector('a');
// let props = [];
// for (let key in nodeAnchor) {
//     props.push(key);
// }

// console.log(props.sort());


// let div = document.createElement('div');
// let text = document.createTextNode('text node example');

// div.appendChild(text);
// document.body.appendChild(div);





/* =========== DOM ELEMENT SELECTION ========= */

// document.querySelector('css selector!');
// document.querySelectorAll('css selector!');

// document.getElementById(); // older

// let menuItem = document.getElementById('menu');
// console.log(menuItem);


let menus = document.getElementsByClassName("menu");
let menus2 = document.querySelectorAll('menu');
let menusArray = Array.from(menus2);
// let menus = Array.from(document.getElementsByClassName("menu"));
// let menus2 = Array.from(document.querySelectorAll('menu'));

// console.log(menus);
// console.log(menus2);
// console.log(menusArray);

let menuItem = document.querySelector('a');
console.log(menuItem.matches('#menu'));