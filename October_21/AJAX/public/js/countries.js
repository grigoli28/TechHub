const prefixInput = document.getElementById('cntryName');
const countriesList = document.getElementById('countries');

prefixInput.addEventListener('input', ({ target }) => {
    const minLength = Number(target.dataset.minlength);
    countriesList.innerHTML = '';
    if (target.value.length > minLength) {
        console.log(target.value);
        const url = `/countries/${target.value}`;


        fetch(url, { method: "GET" })
            .then(res => res.json())
            .then(countries => {
                if (countries.length > 0) {
                    countriesList.innerHTML = countries.map(name => `<option value="${name}">`).join(' ');
                }
            })
            .catch(err => console.log(err));


        /* (async function() {
                    let response = await fetch(url, { method: "GET" });
                    let countries = await response.json();
                    if (countries.length > 0) {
                        countriesList.innerHTML = countries.map(name => `<option value="${name}">`).join(' ');
                    }
                })(); */
    }
});