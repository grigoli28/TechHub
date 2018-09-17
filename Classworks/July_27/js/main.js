// Three types of event handlers (attribute, property, listener)
// Bubbling and Capturing
// event.currentTarget vs event.target
// event.eventPhase
// event.stopPropagation()
// event.stopImmediatePropagation()
// Promise()
// pending, fulfilled, rejected
// Promise.resolve
// Promise.reject
// Promise.all(iterables)
// Promise.race(iterables)




 
/*  
function hello(target) { // !important
    console.log('Attr Handler', target);
}

function hello2(num) {
    console.log('I am Hello2', num);
}


let prop_handler = document.getElementById('prop_handler');
prop_handler.onclick = function(event) {
    console.log('Property Handler', this, event);
    Property2();
};

function Property2() {
    console.log('Property Handler 2');
};


let listener = document.getElementById('listener');
listener.addEventListener('click', function() {
    console.log('AddEventListener Handler');
});
*/



/*  
window.addEventListener('click', (event) => {
    console.log(1);
}, true);

document.addEventListener('click', (event) => {
    console.log(2);
}, true);

document.documentElement.addEventListener('click', (event) => {
    console.log(3);
}, true)

document.body.addEventListener('click', (event) => {
    console.log(4);
}, true);

document.querySelector('#listener').addEventListener('click', (event) => {
    console.log(5);
}, true);

document.querySelector('#listener').addEventListener('click', (event) => {
    console.log(6);
}, false);

document.body.addEventListener('click', (event) => {
    console.log(7);
}, false);

document.documentElement.addEventListener('click', (event) => {
    console.log(8);
}, false);

document.addEventListener('click', (event) => {
    console.log(9);
}, false);

window.addEventListener('click', (event) => {
    console.log(10);
}, false);
*/







/* 
document.querySelector('#listener').addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);

document.body.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);

document.documentElement.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);

document.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);

window.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);
*/





/* 
// document.querySelector('#listener').addEventListener('click', namedCB, false);

document.querySelector('#listener').addEventListener('click', function namedCB(event) {
    console.log('NamedCB', this);
    // console.log(event.currentTarget, event.target, event.eventPhase);
    event.target.removeEventListener('click', namedCB);
}, false);



function namedCB(event) {
    console.log('NamedCB');
    console.log(event.currentTarget, event.target, event.eventPhase);
    event.target.removeEventListener('click', namedCB);
}

let arrowFunction = document.querySelector('#arrowFunc')
arrowFunction.addEventListener('click', event => {
    console.log('ArrowFunc', this); // arrow function does not have 'this' !important
})

document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
})
*/







/*  
let listener = document.getElementById('listener');
listener.addEventListener('click', function(event) {
    console.log('AddEventListener Handler');
    event.stopImmediatePropagation();
    // event.stopPropagation();
});


document.querySelector('#listener').addEventListener('click', function namedCB(event) {
    console.log('NamedCB', this);
    // console.log(event.currentTarget, event.target, event.eventPhase);
    event.target.removeEventListener('click', namedCB);
}, false);


document.body.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);

document.documentElement.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);

document.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);

window.addEventListener('click', (event) => {
    console.log(event.currentTarget, event.target, event.eventPhase);
}, false);
*/








/*  
function doAsync() {
    let p = new Promise(function(resolve, reject) {
        console.log('In promise code');
        setTimeout(function() {
            console.log('Resolving');
            // console.log('Rejecting');
            resolve();
            // reject(new Error('Something Went Wrong')); // !important
        }, 2000);
    });
    return p;
}


// let promise = doAsync();
// doAsync().then(function() {
//     console.log('Fulfilled');
// }, function(error) {
//     console.log('Rejected', error.message);
// })



doAsync().then(function() {
    console.log('Fulfilled');
    return ['Aaa'];
}).then((msg) => {
    console.log(msg);
}).catch(function(error) {
    console.log('Rejected', error.message);
});
*/