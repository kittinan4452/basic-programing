class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Linkedlist{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);
        if (!this.head){
            this.hade = newNode;
            this.tail = newNode;

        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
}
let myLinkedList = new Linkedlist(1);
myLinkedList.push(2);

console.log(myLinkedList);
