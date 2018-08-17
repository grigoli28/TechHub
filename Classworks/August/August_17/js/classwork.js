const fontInp = document.querySelector('#fontInput'),
    colorBtn = document.querySelector('#randomColor'),
    borderInp = document.querySelector('#borderInput'),
    nextBtn = document.querySelector('#nextCommand'),
    backBtn = document.querySelector('#prevCommand'),
    targetText = document.querySelector('#targetText');



class Command {
    constructor(obj) {
        this._subject = obj;
        this.prevCommHist = [];
        this.nextCommHist = [];
    }

    execute(command, value) {
        this.prevCommHist.push(`${command}-${value}`);
        return this._subject[command](value);
    }
}



class DomElement {
    constructor(obj) {
        this._element = obj;
    }

    font(val) {
        this._element.style.fontSize = `${val}px`;
    }

    color(val) {
        this._element.style.color = val;
    }

    border(val) {
        let value = val.replace(/(\d+)/, '$1');
        this._element.style.border = `${value}px dashed black`;
    }
}

let targetCommand = new Command(new DomElement(targetText));

fontInp.addEventListener('keyup', function({ target }) {
    targetCommand.execute('font', target.value);
});

colorBtn.addEventListener('click', function() {
    targetCommand.execute('color', ['navy', 'seagreen', 'red'][Math.floor(Math.random() * 3)]);
});

borderInp.addEventListener('input', function({ target }) {
    targetCommand.execute('border', target.value);
});

backBtn.addEventListener('click', function() {
    console.log(targetCommand.prevCommHist);
    targetCommand.nextCommHist.unshift(targetCommand.prevCommHist.pop());
    console.log(targetCommand.prevCommHist);
    let lastCommand = targetCommand.prevCommHist[targetCommand.prevCommHist.length - 1].split('-');
    console.log(lastCommand)
    targetCommand.execute(lastCommand[0], lastCommand[1]);
});


nextBtn.addEventListener('click', function() {
    targetCommand.prevCommHist.push(targetCommand.nextCommHist.shift());
    let lastCommand = targetCommand.nextCommHist[0].split('-');
    targetCommand.execute(lastCommand[0], lastCommand[1]);
});