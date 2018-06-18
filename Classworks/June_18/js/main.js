/* 
window.onload
DOMContentLoaded

function DOMContentLoaded() {
    alert('DOMContentLoaded');
    let box = document.querySelector(".box");
    box.style.backgroundColor = "red";
}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

window.onload = function() {
    alert('window.onload');

}


// IIFE
(function(x) {
    alert(x)
})(8);
*/




/* 
hoisted
function name() {}

not hoisted
let name = function() {}
*/




/*  
getName();

function getName() {
    alert('Name');
}


let getNameV2 = function() {
    alert('NameV2');
}

getNameV2();
*/




/*  
function showMessage(from, text) {
    from = `* ${from} * `;
    alert(`${from}: ${text}`)
}

let from = 'John';
showMessage(from, 'Hello');

alert(from); // => John
*/




/*  
function sum(x, y) {
    return x + y;
}

let result = sum(5, 8);
console.log(result);

function checkMovie(age) {
    if (age < 18) return;
    alert("Access Granted");
}
checkMovie(21);

function nothing() {
    //Empty 
}
console.log(nothing() == undefined);
*/




/*  
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();

    } else {
        no();
    }
}

function showOkay() {
    alert("You agreed");
}

function showCancel() {
    alert("You denied");
}

//ask("Do you agree?", showOkay, showCancel);
ask("Do you agree?",
    function() { alert("You agreed") },
    function() { alert("You denied") }
)
*/




/*  */
// function f(arg1,arg2,arg3, ..., argN) {}
// (arg1,arg2,arg3, ..., argN) => {}
// let f = (arg1,arg2,arg3, ..., argN) => {}



function sq(n) {
    return n * 2;
}
let sq2 = function(n) {
    return n * 2;
}
let sq3 = n => n * 2;


let say = () => alert("message");
say();


ask("Do you agree?",
    () => alert("You agreed"),
    () => alert("You denied")
)