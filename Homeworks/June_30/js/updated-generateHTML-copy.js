let generateHTML = function(options) {
    let mainNode = document.querySelector(mainSelector);
    for (let i = 0; i < parent.count; i++) {
        let parentNode = document.createElement(parent.element);
        for (let key in parent.attributes) {
            parentNode.setAttribute(key, parent.attributes[key]);
        }
        if (parent.content)
            parentNode.appendChild(document.createTextNode(parent.content));
        if (child.element) {
            for (let i = 0; i < child.count; i++) {
                let childNode = document.createElement(child.element);
                for (let key in parent.attributes) {
                    childNode.setAttribute(key, child.attributes[key]);
                }
                if (child.content)
                    childNode.appendChild(document.createTextNode(child.content));
                parentNode.appendChild(childNode);
            }
        }
        mainNode.appendChild(parentNode);
    }
}

generateHTML({
    mainSelector: '#container',
    parent: {
        element: 'p',
        count: 2,
        content: 'This is text in paragraph',
        attributes: {
            'id': 'myid',
            'class': 'firstclass',
            'style': 'background-color:aqua;'
        }
    },
    child: {
        element: 'strong',
        count: 1,
        content: 'This is text in strong',
        attributes: {
            'id': 'child-id',
            'class': 'child-class'
        }
    }
});