let generate = document.querySelector('#generate');
let numbersBlock = document.querySelector('#numbers');

generate.addEventListener('click', () => {
    let rand = Math.floor((Math.random() * 20) + 1);
    for (let child of numbersBlock.children) {
        if (child.innerHTML == rand) {
            let color = (child.dataset.colorCode == 1) ? 'smoke' : (child.dataset.colorCode == 2) ? 'grey' : 'skyblue';
            if (child.classList.length > 1) child.classList.remove(child.classList[child.classList.length - 1]);
            child.classList.add(color);
            child.dataset.colorCode = Number(child.dataset.colorCode) % 4 + 1;
        }
    }
});