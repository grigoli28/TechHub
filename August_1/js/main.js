// DRY / KISS ideologies
// element.text()
// element.attr()
// element.css()
// element.val()
// .each()
// .click()
// .blur()
// .focus()
// .mousemove()
// .keydown()
// .on()
// append() / appendTo()
// prepend() / prependTo()
// remove()
// wrap()
// addClass()
// hasClass()
// removeClass()
// toggleClass()
// jQuery Event Shortcuts
// localStorage()
// sessionStorage()
// storage.key()
// storage.setItem()
// storage.getItem()








$(document).ready(function() {

    // $('div').each(function(index, element) {
    // let n = $(this);
    // console.log($(this).text());
    // console.log(n.attr('class'));

    // console.log($(this).css('background-color'));
    // });


    // $('img').attr({
    //     title: 'Front End Developer',
    //     style: 'border: 2px dotted black',
    // })


    // $('img').each(function(index, element) {
    //     console.log($(this).attr('style'));
    // });


    // $('.class-5').append('<span> class 5 Content </span>');

    // $('div').append('<strong> Multiple Append</strong>');
    // $(' <span> class 5 Content </span>').appendTo('.class-1'); // !important

    // $('.class-3').prepend('<strong>Prepend Example </strong>');

    // $('<strong>PrependTo Example </strong>').prependTo('div');


    // $('#header').wrap('<header class="header__block" />'); // !important

    // $('.class-2, .class-4').remove();

    // $('div').css('color', 'white');

    // $('div').css({
    //     'color': 'white',
    //     'font-weight': 'bold',
    //     'font-weight': '20px'
    // });


    // $('div, h1').addClass('newClass');


    // let headerh1 = $('h1');
    // if (headerh1.hasClass('newClass')) {
    //     console.log('h1 has a newClass');
    //     headerh1.removeClass('newClass');
    // }




    /* jQuery Event Shortcuts
        click()
        blur()
        focus()
        mousemove()
        keydown()
        on()
        https://api.jquery.com/category/events/
     */



    // $('#header').click(function(event) {
    //     console.log(event);
    //     $('#small__header').click(); // !important
    // });


    // $('#small__header').click(function(event) {
    //     console.log(`Small Header was clicked`);
    // });



    // $('div').on('click mouseenter mouseleave', function(event) {
    //     console.log('Header was clicked');
    //     $(this).toggleClass('entered');
    //     // $('#header').off('click');
    // });



    // $('div').on({
    //     mouseenter: function() {
    //         $(this).addClass('entered');
    //     },
    //     mouseleave: function() {
    //         $(this).removeClass('entered');
    //     }
    // });



    // $('div').hover(
    //     function() {
    //         $(this).addClass('entered');
    //     },
    //     function() {
    //         $(this).removeClass('entered');
    //     }
    // );


    // let storage = window.localStorage;
    // $('#saveBtn').click(function() {
    //     let name = $('#name').val();
    //     let old = storage.getItem('userName');
    //     storage.setItem('userName', `${old} ${name}`);
    //     console.log(storage.key(0));
    // });



    let storage = window.sessionStorage;
    $('#saveBtn').click(function() {
        let name = $('#name').val();
        let old = storage.getItem('userName');
        storage.setItem('userName', `${old} ${name}`);
        console.log(storage.key(0));
    });

});