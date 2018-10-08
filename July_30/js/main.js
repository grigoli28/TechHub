// .stopPropagation()
// .stopImmediatePropagation()
// Custom Events
// .createEvent('CustomEvent')
// .initCustomEvent()
// .dispatchEvent()





const container = document.querySelector('.container');
const contentBox = document.querySelector('.content_box');
const pElement = document.querySelector('p');


/* 
container.addEventListener('click', function click(event) {
    console.log("Container Div");
}, false);

contentBox.addEventListener('click', function click(event) {
    console.log("Content Box");
}, false);

pElement.addEventListener('click', function click(event) {
    console.log("P Tag");
    event.stopPropagation();
    event.stopImmediatePropagation();
}, false);

pElement.addEventListener('click', function click2(event) {
    console.log("P click2");
}, false); 
*/




/* Event Creation Example 
const myEvent = document.createEvent('customevent');

const myCustomEventData = {
    name: 'myCustomEvent',
    id: 2018
};

myEvent.initCustomEvent('myCustomEvent', true, false, myCustomEventData);

pElement.addEventListener('myCustomEvent', (event) => { // !important
    console.log(event);
});

contentBox.addEventListener('myCustomEvent', (event) => {
    console.log(event.detail);
}, false);


pElement.dispatchEvent(myEvent);
*/



// const table = document.querySelector('table');

// table.addEventListener('click', ({ target }) => {
//     if (target.tagName.toLowerCase() === 'td') {
//         console.log(target.textContent);
//     }
// });





/* 
let myEvent = new CustomEvent('myCustomEvent', {
    detail: {
        name: 'Custom Event',
        id: 1
    },
    bubbles: true,
    cancelable: false
});

pElement.addEventListener('click', (event) => {
    console.log(event);
    pElement.dispatchEvent(myEvent);
})

pElement.addEventListener('myCustomEvent', (event) => {
    console.log(event);
})
*/