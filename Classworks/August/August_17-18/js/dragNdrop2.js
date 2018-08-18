let souceContainerId;


function dragStart(event) {
    try {
        event.dataTransfer.setData('text/plain', event.target.id);
    } catch (err) {
        event.dataTransfer.setData('text', event.target.id);
    }
    souceContainerId = this.parentElement.id;
}


function cancel(event) {
    if (event.preventDefault()) {
        event.preventDefault();
    }
    if (event.stopPropagation()) {
        event.stopPropagation();
    }
    return false;
}


function dropped(event) {
    let id;
    if (this.id !== souceContainerId) {
        cancel(event);

        try {
            id = event.dataTransfer.getData('text/plain');
        } catch (err) {
            id = event.dataTransfer.getData('text');
        }

        event.target.appendChild(document.getElementById(id));
    }
}


let targets = document.querySelectorAll('[data-role="drag-drop-target"]');


[].forEach.call(targets, function(target) {
    target.addEventListener('drop', dropped, false);
    target.addEventListener('dragover', cancel, false);
    target.addEventListener('dragenter', cancel, false);
});

let sources = document.querySelectorAll('[draggable="true"]');

[].forEach.call(sources, function(source) {
    source.addEventListener('dragstart', dragStart, false);
});