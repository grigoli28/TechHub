function getSecondsToTomorrow() {
    let now = new Date();
    let tom = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    console.log((tom - now) / 1000);
}

getSecondsToTomorrow();