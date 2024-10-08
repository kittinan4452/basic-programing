class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.lemgth = 1;
    }
}

let myLinkedList = new LinkedList(1);
console.log(myLinkedList);
