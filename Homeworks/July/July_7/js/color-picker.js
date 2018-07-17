document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i < 10; i++) {
        document.querySelector(`.picker${i}`).style.backgroundColor = `#${i}${10 - i}${i}`;
    }
    let colors = [];

    for (let i = 1; i < 4; i++) {
        let row = document.querySelector(`.colors${i}`);
        for (let item of row.children) {
            item.addEventListener('click', ({ target }) => {
                colors[i - 1] = target.style.backgroundColor;
            })
        }
    }

    let results = document.querySelector('.results');

    let button = document.querySelector('#show-result');

    button.addEventListener('click', () => {
        console.log(colors[0] == 0)
        if (colors[0] == undefined || colors[1] == undefined || colors[2] == undefined)
            alert('Please choose one color from each row')
        else
            for (let i = 0; i < 3; i++) {
                results.children[i].style.backgroundColor = colors[i];
            }
    })
});