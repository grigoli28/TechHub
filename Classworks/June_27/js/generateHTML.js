let generateHTML = function(count, tagName, selector, content = '', childCount = 0, childElement = '') {
    let mainNode = document.querySelector(selector);
    let parentNodeArr = [];
    for (let i = 0; i < count; i++) {
        parentNodeArr.push(document.createElement(tagName));
    }
    console.log(parentNodeArr);

    let contentNode = document.createTextNode(content);
    console.log(contentNode);
    parentNodeArr[0].appendChild(contentNode);
    // for (let item of parentNodeArr) {
    //     item.appendChild(contentNode);
    // }
    console.log(parentNodeArr);

    mainNode.appendChild(parentNodeArr[0])

    // let childNodeArr = [];
    // for (let i = 0; i < childCount; i++) {
    //     childNodeArr.push(document.createElement(childElement));
    // }

    // for (let i = 0; i < count; i++) {
    //     for (let k = 0; k < childCount; k++) {
    //         parentNodeArr[i].appendChild(childNodeArr[k]);
    //     }
    // }




}

generateHTML(4, 'p', '#container', 'This is paragraph', 2, 'strong');
``
`