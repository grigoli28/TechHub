class Board {
    constructor(id) {
        this._id = id;
        this._element = null;
        this._resetFont = '';
        this._resetColor = '';
        this._resetBorder = '';
    }

    init() {
        this._element = document.getElementById(this._id);
        this.updateFontSize(this._resetFont = getComputedStyle(this._element).fontSize);
        this.updateColor(this._resetColor = getComputedStyle(this._element).color);
        this.updateBorderWidth(this._resetBorder = getComputedStyle(this._element).borderWidth);
    }


    updateFontSize(fontSize) {
        this._element.style.fontSize = fontSize;
    }

    updateColor(color) {
        this._element.style.color = color;
    }

    updateBorderWidth(width) {
        this._element.style.borderWidth = width;
    }

    reset(method) {
        switch (method) {
            case 'updateFontSize':
                this._element.style.fontSize = this._resetFont;
                break;
            case 'updateColor':
                this._element.style.color = this._resetColor;
                break;
            case 'updateBorderWidth':
                this._element.style.borderWidth = this._resetBorder;
                break;
            default:
                break;
        }
    }
}


class Command {
    constructor(obj) {
        this._subject = obj;
        this.executedCommands = [];
        this.usedValues = [];
        this.nextCommands = [];
        this.nextValues = [];
    }

    execute(command, value) {
        this.executedCommands.push(command);
        this.usedValues.push(value);
        return this._subject[command](value);
    }

    back() {
        if (this.executedCommands.length) {
            let lastCommand = this.executedCommands.pop();
            let lastCommandValue = this.usedValues.pop();

            this.nextCommands.push(lastCommand);
            this.nextValues.push(lastCommandValue);

            if (this.executedCommands.includes(lastCommand)) {
                this.executedCommands.forEach((command, index) => {
                    this._subject[command](this.usedValues[index]);
                });
            } else {
                this._subject.reset(lastCommand);
            }
        } else {
            alert('Can Not Go Back!');
        }
    }


    next() {
        if (this.nextCommands.length) {
            let nextCommand = this.nextCommands.pop();
            let nextCommandValue = this.nextValues.pop();
            this.execute(nextCommand, nextCommandValue);
        } else {
            alert('Can Not Go Forward!');
        }
    }
}

const board = new Board('board');
board.init();


let boardHistory = new Command(board);
boardHistory.execute('updateBorderWidth', '5px');
boardHistory.execute('updateColor', 'seagreen');
boardHistory.execute('updateFontSize', '40px');
boardHistory.back();
boardHistory.back();
boardHistory.next();
boardHistory.next();
console.log(boardHistory.executedCommands);
console.log(boardHistory.usedValues);