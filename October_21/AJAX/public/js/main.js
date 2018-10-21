const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', ({ target }) => {
    let num_1 = document.getElementById('num_1').value;
    let num_2 = document.getElementById('num_2').value;
    let loader = document.getElementById('loader');
    let result = document.getElementById('result');
    let url = `/add?num_1=${num_1}&num_2=${num_2}`;

    // showLoader(loader);


    /* fetch(url, { method: 'GET' })
    .then(res => res.text())
    .then(data => result.innerHTML = `Sum is ${data}`)
    .catch(err => console.error(err))
    .finally(() => {
      loader.classList.add('loader--hide');
      loader.classList.remove('loader--show');
    });
    */


    // JQuery
    //  $.get(), $.post(), $.getScript(), $.getJson()

    /* $.ajax({
        url: '/add',
        method: 'GET',
        data: { num_1, num_2 },
    }).done(data => {
        result.innerHTML = `Sum is ${data}`;
    }).always(() => {
        hideLoader(loader);
    });
    */


    
    function showLoader(loader) {
        loader.classList.add('loader--show');
        loader.classList.remove('loader--hide');
    }

    function hideLoader(loader) {
        loader.classList.add('loader--hide');
        loader.classList.remove('loader--show');
    }
});