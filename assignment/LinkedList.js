// a list where the nodes are linked together and each nodes contains data and a pointer(next)
//node class represent a single node of the linked list

class Node{
    constructor(data) {
        this.data = data
        this.next=null
    }
}
//linkedlist class define a single linkedlist
class LinkedList{
    constructor() {
        this.head=null//intially the list is empty
    }
    //method to add a new node at the end of linked list
    
    append(data) {
        let node = new Node(data)
        if (this.head == null) {
            this.head = node
            return
        }
        let temp = this.head
        while (temp.next != null) {
            temp=temp.next
        }
        temp.next=node
    }
//insert node between the nodes
    addAtPosition(position, data) {
        if (position <= 0) {
            console.log("Invalid position")
            return
        }
        let node = new Node(data)
        if (position === 1) {
            node.next = this.head
            this.head = node
            return
        }
        let count = 1
        let temp = this.head
        while (temp != null && count < position - 1) {
            temp = temp.next
            count++
        }
        if(temp == null) {
            console.log("position does not exist")
            return
        }
        node.next = temp.next
        temp.next = node
    }
    //method to display the linked list
    display() {
        let temp = this.head
        let res = ""
        while (temp != null) {
            res = res + temp.data + "->";//concatenate node data
            temp=temp.next
        }
        console.log(res+null)//print the result
    }
    delete(data) {
        if (this.head == null) {
            return
        }
        if (this.head.data == data) {
            this.head = this.head.next
            return
        }
        let temp = this.head
        while (temp.next != null && temp.next.data != data) {
            temp = temp.next
        }
        //data was not found
        if (temp.next == null) {
            console.log("data not found")
            return
        }
        temp.next = temp.next.next
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.display()
list.addAtPosition(2, 3)
list.append(4)
list.display()
list.delete(3)
list.display()
