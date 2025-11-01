// Node class represents a single node of the linked list
class Node {
    constructor(data) {
        this.data = data;   
        this.next = null;   
    }
}

// LinkedList class defines a singly linked list
class LinkedList {
    constructor() {
        this.head = null;   // initially, the list is empty so head = null
    }

    // Method to add (append) a new node at the end of the linked list
    append(data) {
        let node = new Node(data);
        if (this.head == null) {    // if list is empty
            this.head = node;      
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        // add new node at the end
        temp.next = node;
    }

    // Method to insert a node at a specific position
    addAtPosition(position, data) {
        let node = new Node(data);
        let count = 1;
        let temp = this.head;

        
        while (temp != null && count < position - 1) {
            temp = temp.next;
            count++;
        }

        // if position does not exist, display message
        if (temp == null) {
            console.log("Position does not exist");
            return;
        }

        // insert node between temp and temp.next
        node.next = temp.next;
        temp.next = node;
    }

    // Method to display all elements in the linked list
    display() {
        let temp = this.head;
        let res = "";
        while (temp != null) {
            res = res + temp.data + "->";   // concatenate node data
            temp = temp.next;
        }
        console.log(res + null);  // print the result and indicate end of list
    }

    // Method to delete a node by its data value
    delete(data) {
            if (this.head.data == data) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
               while (temp.next != null && temp.next.data != data) {
            temp = temp.next;
        }

        // if data not found in list
        if (temp.next == null) {
            console.log("Data not found");
            return;
        }

        // skip the node to be deleted
        temp.next = temp.next.next;
    }
}

// Create a linked list instance
let list = new LinkedList();

// Append nodes to the linked list
list.append(1);
list.append(2);

// Insert a new node with data=3 at position 2
list.addAtPosition(2, 3);


list.append(4);


list.display();

// Delete node with data=3
list.delete(3);

// Display the linked list after deletion
list.display();

