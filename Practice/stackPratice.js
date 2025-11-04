class Stack {
    constructor() {
        this.Stack = []
    }
    push(data) {
        this.Stack.push(data)
    }
    
    isEmpty() {
        if (this.Stack.length == 0) {
            return true
        } else {
            return false
        }
    }
    
    pop() {
        if (this.isEmpty()) {
            console.log("stack is underflow")
            return
        } else {
           return this.Stack.pop()
        }
    }
    
    peek() {
        if (this.isEmpty()) {
            console.log("stack is empty")
        } else {
           return this.Stack[this.Stack.length-1]
        }
    }
    
    size() {
       return this.Stack.length
    }
    clear() {
      this.Stack=[]  
    }
}
    

let stack = new Stack()
stack.push(5);
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack)
console.log(stack.pop())
console.log(stack)
console.log(stack.peek())
console.log(stack.isEmpty())