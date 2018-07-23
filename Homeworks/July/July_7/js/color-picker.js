document.addEventListener('DOMContentLoaded', () => {
    let colors = [];

    for (let i = 1; i < 4; i++) {
        let row = document.querySelector(`.colors${i}`);
        for (let item of row.children) {
            item.addEventListener('click', ({ target }) => {
                colors[i - 1] = window.getComputedStyle(target).backgroundColor;
            })
        }
    }

    let results = document.querySelector('.results');

    let button = document.querySelector('#show-result');

    button.addEventListener('click', () => {
        if (colors[0] == undefined || colors[1] == undefined || colors[2] == undefined)
            alert('Please choose one color from each row');
        else
            for (let i = 0; i < 3; i++)
                results.children[i].style.backgroundColor = colors[i];
    })
});