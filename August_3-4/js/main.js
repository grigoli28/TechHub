// XMLHttpRequests
// .load()
// request.open()
// request.onreadystatechange
// request.send()
// Request Events (progress, load, error, abort)
// $.get(url, data, function)
// $.getJSON(url, data, function)
// $.ajax()
// Ajax Calls = .load(), .get(), .getJSON(), .post(), .ajax()
// Supported Ajax Data types : JSON, XML, XHTML







$(document).ready(function() {

    $('#loadBtn').click(function() {
        // // $('#myDiv').load('template.html #small'); // !important
        // $('#myDiv').load('template.html', function(response, status, xhr) {
        //     // xhr object is instance of XMLHttpRequest() !important
        //     if (status === 'error') {
        //         alert('Not Found');
        //     }
        //     console.log(response);
        //     console.log(status);
        //     console.log(xhr.status);
        // });


        // let request;
        // if (window.XMLHttpRequest) {
        //     request = new XMLHttpRequest();
        // } else if (window.ActiveXObject) /*  for Internet Explorer  */ {}

        // request.addEventListener('progress', progressFunc);
        // request.addEventListener('load', completed);
        // request.addEventListener('error', errorFunc);
        // request.addEventListener('abort', cancelFunc);

        // request.onreadystatechange = function() {
        //     if (request.readyState == XMLHttpRequest.DONE) {
        //         myDiv.innerHTML = request.responseText;
        //         console.log(request.responseText);
        //     } else {
        //         console.log('Request  - ', request.readyState);
        //     }
        // }

        // function progressFunc() {
        //     console.log('Progress Function');
        // }

        // function completed() {
        //     console.log('Completed Function');
        // }

        // function errorFunc() {
        //     console.log('Error Function');
        // }

        // function cancelFunc() {
        //     console.log('Cancel Function');
        // }

        // request.open('GET', 'template.html', true);
        // request.send(null);






        // let url = 'https://jsonplaceholder.typicode.com/users';

        // $.get(url, function(data) {
        //     $('#myDiv').append(
        //         data.map((el) => {
        //             return `<h1>${el.name}</h1>`;
        //         }).join('')
        //     );
        // });



        // $.getJSON(url, function(data) {
        //     console.log(data);
        //     $('#myDiv').append(
        //         data.map((el) => {
        //             return `<h1>${el.name}</h1>`;
        //         }).join('')
        //     );
        // });



        // Ajax Calls = .load(), .get(), .getJSON(), .post(), .ajax() // !Important
        // Supported Ajax Data types : JSON, XML, XHTML
        // $.ajax({
        //     url,
        //     data: null,
        //     method: 'get',
        //     dataType: 'json',
        //     success(data, status, xhr) {
        //         console.log(data);
        //         $('#myDiv').append(
        //             data.map((el) => {
        //                 return `<h1>${el.name}</h1>`;
        //             }).join('')
        //         );
        //     },
        //     error(xhr, status, error) {
        //         console.log(error);
        //     }
        // });





    });
});