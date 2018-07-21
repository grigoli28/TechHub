let currDate = new Date();
clock.innerText = `${currDate.getHours()} : ${currDate.getMinutes()} : ${currDate.getSeconds()}`;

let timerInterval = setInterval(() => {
    currDate = new Date();
    clock.innerText = `${currDate.getHours()} : ${currDate.getMinutes()} : ${currDate.getSeconds()}`;
}, 1000)

pause.addEventListener('click', () => {
    setTimeout(() => {
        clearInterval(timerInterval);
    }, clockInput.value * 1000);
})

start.addEventListener('click', () => {
    newDate = new Date();
    clock.innerText = `${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`;
    timerInterval = setInterval(() => {
        currDate = new Date();
        clock.innerText = `${currDate.getHours()} : ${currDate.getMinutes()} : ${currDate.getSeconds()}`;
    }, 1000)
})