let storage = window.sessionStorage;

$('#save').on('click', function() {
    storage.setItem('Name', $('#name').val());
    storage.setItem('Surname', $('#surname').val());
    storage.setItem('Age', $('#age').val());
});

$('#show').on('click', function() {
    $('#prName').text(storage.getItem('Name'));
    $('#prSurname').text(storage.getItem('Surname'));
    $('#prAge').text(storage.getItem('Age'));
    $('#result').addClass('show');
});