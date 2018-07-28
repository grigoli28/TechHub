save.addEventListener('click', () => {
    let myPromise = new Promise((resolve) => {
        loading.classList.add('show');
        setTimeout(() => {
            resolve({
                day: day.value,
                month: month.value,
                year: year.value,
                about: about.value,
                city: city.value
            });
        }, 2000);
    })

    myPromise.then(({ day, month, year, about, city }) => {
            resday.innerHTML = day;
            resmonth.innerHTML = month;
            resyear.innerHTML = year;
            resabout.innerHTML = about;
            rescity.innerHTML = city;
            loading.classList.remove('show');
            result.classList.add('show');
            pic.classList.add('show');
        })
        .catch(error => {
            alert(`Something Wron: ${error.message}`);
        });
})