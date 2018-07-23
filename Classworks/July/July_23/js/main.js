// try, catch, finally, throw blocks
// error.[stack | name | message]
// JSON - Javascript Object Notation
// JSON.stringify()
// JSON.parse()
// SyntaxError
// window.onerror





/* XML sample !important
    <user>
        <name>XML Guy</name>
        <id>666</id>
        <isAdmin>1</isAdmin>
    </user>
*/

/* JSON sample !important
    {
        name: 'JSON Guy',
        id: 667,
        isAdmin: true
    }
*/



/*
let a = 11;

console.log(a);
try {
    console.log(b);
} catch (error) {
    console.log(error.message)
}

let b = 13;

console.log(a + b);
*/






/*
try {
    console.log('Start of try');
    undefinedVar;
    console.log('End of try');
} catch (error) {
    // error.stack|name|message
    console.log(`Error has occured - ${error.message}`);
} finally {
    console.log('Always ready');
}
*/




// Sending data to a server, example. !important
let myPerson = {
    name: 'JSON Guy',
    id: 667,
    isAdmin: true
};

let toSendData = [myPerson, myPerson, myPerson];
// console.log(...toSendData);
let serialized = JSON.stringify(toSendData);
// console.log(serialized);
let unserialized = JSON.parse(serialized);
// console.log(...unserialized);
let json = '[{"name":"JSON Guy","id":667,"isAdmin":true}]';

let wrongjson = '{"name":"JSON Guy","id":667}';


/*  
try {
    let data = JSON.parse(json);
    console.log(...data);
} catch (error) {
    console.log(error)
}
*/

/*  
try {
    undefinedVar;
    let data = JSON.parse(wrongjson);
    if (!data.isAdmin) {
        throw new SyntaxError('Incomplete Data: isAdmin property is not provided!');
    }
} catch (error) {
    if (error instanceof SyntaxError) { // !important
        console.log(`JSON Error - ${error}`);
    } else {
        console.log(`Other Error - ${error}`);
    }
}
*/


// causeError;
// window.onerror = (message, url, line, col, error) => {
//     console.log(message, url, line, col, error);
// }


class Error {
    constructor(message) {
        this.message = message;
        this.name = 'Error';
        // this.stack = ...
    }
}


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}


function validateJSON(json) {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new ValidationError('No Field : name');
    }
    if (!user.id) {
        throw new ValidationError('No Field : id');
    }
    if (!user.isAdmin) {
        throw new ValidationError('No Field : isAdmin');
    }
}


try {
    let user = validateJSON(json);

} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Invalid data - ${error.message}`);

    } else if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error - ${error.message}`);
    } else {
        throw error;
    }
}