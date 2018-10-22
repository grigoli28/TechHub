window.onload = () => {
    const moviesListEl = document.getElementById('moviesList');
    let movieUrl = '/api/v1/movies';

    fetchMovies(movieUrl, render, moviesListEl);





    function render(data, element) {
        if (data.length) {
            const html = data.map(item =>
                `<tr>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.genre}</td>
                    <td>${item.year}</td>
                </tr`).join(' ');
            element.innerHTML = html;
        }
    }


    function fetchMovies(url, callback, element) {
        fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(data => data.json())
            .then(data => {
                console.log('RESPONSE', data);
                callback(data, element);
            })
            .catch(err => console.log(err));
    }
};