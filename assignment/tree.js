//Tree is hirarchical data struture in form of parent child relationship
//CRUD: Create,Read,Update,Delete
//node class represent the binary tree
class Node{
    constructor(val) {
        this.left = null
        this.val = val
        this.right=null
    }
}
//its imlpemets my crud operations
class BinaryTree{
    constructor() {
        this.root=null //in start tree is empty
    }
    //insert a new value 
    insert(val) {
        let node = new Node(val)
        if (this.root == null) {
            this.root = node
            return
        }
        let queue = []
        queue.push(this.root)
        //loop untill an empty child was spot
        while (queue.length > 0) {
            let currentNode = queue.shift()
            //insert a left child if they empty
            if (currentNode.left == null) {
                currentNode.left = node
                return
            } else {
                queue.push(currentNode.left)
            }
            //insert a right child if they empty
            if (currentNode.right == null) {
                currentNode.right = node
                return
            } else {
                queue.push(currentNode.right)
            }
        }
    }
    //read or print the values of the tree using inorder traversal
    inorder(parent) {
        if (parent == null) {
            return
        }
        this.inorder(parent.left)
        console.log(parent.val)
         this.inorder(parent.right)
    }
    //replace a node values with old one
    update(oldValue, newValue) {
        if (this.root == null) {
            return false
        }
        let queue = []
        queue.push(this.root)
        while (queue.length > 0) {
            let currentNode = queue.shift()
            if (currentNode.val == oldValue) {
                currentNode.val = newValue
                return true
            }
            if (currentNode.left != null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right != null) {
                queue.push(currentNode.right)
            }
        }
        //node not found
        return false
    }
    delete(val) {
        if (this.root.val == null) {
            console.log("tree is empty")
            return false
        }
        //if tree has only one node
        if (this.root.left == null && this.root.right == null) {
            if (this.root.val == val) {
                this.root = null
                return true
            }
           
        }
        console.log("root " + this.root.val)
        let queue = []
        queue.push(this.root)
        let keyNode = null
        let temp = null
        while(queue.length>0) {
            temp = queue.shift()
            if (temp.val == val){
                keyNode=temp
            }
            if (temp.left != null) {
                queue.push(temp.left)
            }
             if (temp.right != null) {
                queue.push(temp.right)
            }
        }
        if (keyNode != null) {
            let lastValue = temp.val
            this.deleteDeepest(temp)
            keyNode.val = lastValue
            return true
        }
        return false
    }
    deleteDeepest(temp) {
        let queue = []
        queue.push(this.root)
        if (this.root == temp) {
            this.root = null
            return
        }
        
        while (queue.length > 0) {
            let currentNode = queue.shift()
           
            if (currentNode.left == temp) {
                currentNode.left = null
                return
            } else if (currentNode.left != null) {
                queue.push(currentNode.left)
            }
           
            if (currentNode.right == temp) {
                currentNode.right = null
                return
            } else if (currentNode.right != null) {
                queue.push(currentNode.right)
            }
        }
    }
}
let tree = new BinaryTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(5)
tree.update(1,6)
tree.inorder(tree.root)
tree.delete(2)
tree.inorder(tree.root)