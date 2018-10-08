// element:contains(str)
// element:odd / even
// .html()
// .text()
// .attr()

// jQuery(document).ready(function() {
//     alert('DOM');
// });

$(document).ready(function() {
    // alert('DOM');

    // $(selectorExpression)

    // const divElements = $('div, p');
    // console.log(divElements);

    // let trElements = $('table tr');
    // console.log(trElements);

    // const customersDiv = $('#customersDiv');
    // console.log(customersDiv);

    // const wowClass = $('.wow');
    // console.log(wowClass);

    // const multipleClasses = $('.content_box, .wow');
    // console.log(multipleClasses);

    // const table = $('table[border]');
    // console.log(table);

    // const span = $('span:contains("Site")');
    // console.log(span);

    const oddTr = $('tr:odd');
    // console.log(oddTr);

    const evenTr = $('tr:even');
    // console.log(evenTr);

    evenTr.each(function(index) {
        console.log($(this).html());
        this.title = `Current Index ${index}`;
    })

    // let attrVal = customersDiv.attr('class');
    // console.log(attrVal);

    // let attrVal = customersDiv.attr('class', 'newclass wow');
    // console.log(attrVal);
});