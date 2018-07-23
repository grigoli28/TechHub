class Error {
    constructor(message) {
        this.message = message;
        this.name = 'Error';
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

class PropertyRequiredError extends ValidationError {
    constructor(prop) {
        super(`No Property: ${prop}`);
        this.name = 'PropertyRequiredError';
        this.missingProperty = prop;
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
    return user;
}



// Implementation
try {
    let user = readUser('{"name": "JS", "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message);
        console.log(err.name);
        console.log(err.missingProperty);
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err;
    }
}