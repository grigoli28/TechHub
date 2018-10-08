/* 
    process.stdout.write
    readableStream.pipe(writableStream);
*/


console.log('stdout is writable? ', process.stdout.writable);
process.stdout.write('Hello');
process.stdout.write(' NODE JS');