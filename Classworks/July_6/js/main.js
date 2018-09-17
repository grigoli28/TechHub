// default parameters

function showSomething(title = "Untitled", width = 200, height = 200, items = []) {
    console.log(`title = ${title}, width = ${width}, height = ${height}, items = ${items}`);
}
let options = {
    title: 'my title',
    items: ['item1', 'item2', 'item3']
}

function showSomethingV2({ title = "Untitled", width = 200, height = 200, items = [] }) {
    console.log(`title = ${title}, width = ${width}, height = ${height}, items = ${items}`);
}

showSomething('my title', 150, 300, ['item1', 'item2', 'item3']);
showSomethingV2(options);