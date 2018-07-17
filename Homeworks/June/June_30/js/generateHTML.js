let generateHTML = function(options) {
    let mainNode = document.querySelector(options.mainSelector);
    for (let i = 0; i < options.parent.count; i++) {
        let parentNode = document.createElement(options.parent.element);
        for (let key in options.parent.attributes) {
            parentNode.setAttribute(key, options.parent.attributes[key]);
        }
        if (options.parent.content)
            parentNode.appendChild(document.createTextNode(options.parent.content));
        if (options.child.element) {
            for (let i = 0; i < options.child.count; i++) {
                let childNode = document.createElement(options.child.element);
                for (let key in options.child.attributes) {
                    childNode.setAttribute(key, options.child.attributes[key]);
                }
                if (options.child.content)
                    childNode.appendChild(document.createTextNode(options.child.content));
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