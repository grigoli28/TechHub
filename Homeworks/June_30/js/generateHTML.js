let generateHTML = function(count, tagName, selector, content = '', childCount = null, childElement = null) {
    let selectorNode = document.querySelector(selector);
    for (let i = 0; i < count; i++) {
        let parentNode = document.createElement(tagName);
        selectorNode.appendChild(parentNode);
        if (childElement != null) {
            for (let i = 0; i < childCount; i++) {
                let childNode = document.createElement(childElement);
                childNode.style.display = "block";
                childNode.appendChild(document.createTextNode(content));
                parentNode.appendChild(childNode);
            }
        } else {
            parentNode.appendChild(document.createTextNode(content));
        }
    }
}
generateHTML(2, 'p', '#container', 'This is strong in paragraph', 2, 'strong');
// generateHTML(1, 'p', '#container', 'This is paragraph in paragraph', 1, 'p');
// generateHTML(4, 'p', '#container', 'This is anchor in paragraph', 2, 'a');