// Module Pattern
// Module Revealing Pattern





// (function(x, y) {
//     'use strict';
//     console.log(x, y);
// })(1, 3);



/*   Module Pattern
let myModule = (function() {
    let _privateVar = 'Hello World from a Module';

    function _privateMethod() {
        console.log(_privateVar);
    }
    return {
        publicMethod() {
            _privateMethod();
        }
    }
}());

myModule.publicMethod();
console.log(myModule._privateVar); // Can not get this variable
myModule._privateMethod();
*/






/*  Module Revealing Pattern 
let myModule = (function() {
    let _privateVar = 'Hello World from a Module';
    let publicProperty = 'This is a public property';

    function _privateMethod() {
        console.log(_privateVar);
    }

    function publicMethod() {
        _privateMethod();
    }
    return {
        publicMethod,
        publicProperty
    }
}());


myModule.publicMethod();
console.log(myModule.publicProperty);
*/