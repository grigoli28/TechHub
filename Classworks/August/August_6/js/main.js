// JS Custom Plugins
// Web Workers
// worker.postMessage()
// worker.terminate()

$(document).ready(function() {

    // $('h1').myPlugin();
    // $('h1').myPlugin2();


    $('h1').styleElement({
        text: 'Hello Plugin',
        color: 'beige',
        fontSize: '20px',
        backgroundColor: 'seagreen'
    });



    let worker = new Worker('js/work.js');
    worker.postMessage('Hello my Worker!...');
    worker.addEventListener('message', (event) => {
        console.log(event.data);
        worker.terminate();
    });



});