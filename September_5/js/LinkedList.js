function LinkedList() {
    let head = null;
    let length = 0;

    let Node = function (value) {
        this.value = value;
        this.next = null;
    }

    this.length = () => length;

    this.head = () => head;

    this.add = (value) => {
        let node = new Node(value);
        if (head === null) {
            head = node;
        }
        else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    this.remove = (value) => {
        let current = head;
        let prevNode;

        if (current.value === value) {
            head = current.next;
        }
        else {
            while (current.value !== value) {
                prevNode = current;
                current = current.next;
            }
            prevNode.next = current.next;
        }
        length--;
    }

    this.isEmpty = () => length === 0;


    this.indexOf = (value) => {
        let current = head;
        let index = -1;
        while (current) {
            index++;
            if (current.value === value) {
                return index;
            }
            current = current.next;
        }
        return -1;
    }

    this.valueAt = (index) => {
        if (index <= this.length()) {
            let current = head;
            for (let i = 1; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        else {
            return null;
        }
    }


    this.insertAt = (index, value) => {
        let prevNode = this.valueAt(index - 1);
        let nextNode = prevNode.next;
        let node = new Node(value);
        prevNode.next = node;
        node.next = nextNode;
        length++;
    }

    this.printList = () => {
        let node = head;
        for (let i = 0; i < list.length(); i++) {
            console.log(node);
            node = node.next;
        }
    }

    this.removeAt = (index) => {
        let prevNode = this.valueAt(index);
        this.remove(prevNode.value);
    }

}



let list = new LinkedList();
list.add(1);
list.add(13);
list.add(16);
// list.insertAt(3, 69);
list.add(20);
list.printList();
list.removeAt(3);
console.log('------------');
list.printList();