let text = document.querySelector('#text');
let result = document.querySelector('#result');
let count = document.querySelector('#count');
let countObj = {};


count.addEventListener('click', function(event) {
    let str = text.value;
    str = str.replace(/[^A-z]/g, '').toLowerCase().split('');
    str.forEach(element => {
        if (countObj[element]) {
            countObj[element] += 1;
        } else {
            countObj[element] = 1;
        }
    });
    for (let prop in countObj) {
        result.innerHTML += `<tr>
                            <td>${prop}</td>
                            <td>${countObj[prop]}</td>
                            </tr>`;
    }
});