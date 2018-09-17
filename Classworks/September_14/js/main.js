/* Module Import/Export */


/* 
    npm install <package_name>
    npm ls
    npm ls -g
    npm init
*/


/*
const upperCase = require('upper-case');
console.log(upperCase('My String'));
*/


/* 
for (let i = 1; i < 11; i++) {
    console.log(i);
}
*/



/* 
const OS  = require('os');
console.log(`Platform - ${OS.platform}`);
console.log(`Architecture - ${OS.arch}`);
console.log(`CPUs - ${OS.cpus().length}`); 
 */




const dateFormatter = require('./date_formatter');
let date = new Date();

console.log(`Current Date: ${dateFormatter.formatDate(date, ':')}`);
console.log(`Current Date: ${dateFormatter.formatTime(date, '-')}`);