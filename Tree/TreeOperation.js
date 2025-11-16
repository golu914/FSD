// CRUD: Create, Read, Update, Delete

// Node class represents each node in the binary tree
class Node {
    constructor(val) {
        this.left = null;   // Pointer to the left child
        this.val = val;     // Node value
        this.right = null;  // Pointer to the right child
    }
}

// BinaryTree class that implements CRUD operations
class BinaryTree {
    constructor() {
        this.root = null;   // Tree starts empty
    }

    // CREATE: Insert a new value in level order (BFS)
    insert(val) {
        let node = new Node(val);
        // If tree is empty, make this node the root
        if (this.root == null) {
            this.root = node;
            return;
        }

        // Use a queue to perform level-order traversal
        let queue = [];
        queue.push(this.root);

        // Loop until an empty child spot is found
        while (queue.length > 0) {
            let currentNode = queue.shift();

            // Insert as left child if empty
            if (currentNode.left == null) {
                currentNode.left = node;
                return;
            } else {
                queue.push(currentNode.left);
            }

            // Insert as right child if empty
            if (currentNode.right == null) {
                currentNode.right = node;
                return;
            } else {
                queue.push(currentNode.right);
            }
        }
    }

    // READ: Print the values of the tree using inorder traversal
    inorder(parent) {
        if (parent == null) {
            return;
        }
        // Traverse left subtree
        this.inorder(parent.left);
        // Print current node value
        console.log(parent.val);
        // Traverse right subtree
        this.inorder(parent.right);
    }

    // UPDATE: Replace a node's value with a new one
    update(oldValue, newValue) {
        if (this.root == null) {
            return false;
        }

        let queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let currentNode = queue.shift();

            // If the node with the given oldValue is found, update it
            if (currentNode.val == oldValue) {
                currentNode.val = newValue;
                return true;
            }

            // Continue BFS on children
            if (currentNode.left != null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right != null) {
                queue.push(currentNode.right);
            }
        }

        // Node not found
        return false;
    }

    // DELETE: Delete a node by replacing it with the deepest node
    delete(val) {
        // If tree is empty
        if (this.root == null) {
            console.log("tree is empty");
            return false;
        }

        // If tree has only one node
        if (this.root.left == null && this.root.right == null) {
            if (this.root.val == val) {
                this.root = null;
                return true;
            }
        }

        console.log("root " + this.root.val);

        // BFS traversal to find both keyNode and deepest node
        let queue = [];
        queue.push(this.root);
        let keyNode = null;
        let temp = null;

        while (queue.length > 0) {
            temp = queue.shift();

            // Track the node to delete
            if (temp.val == val) {
                keyNode = temp;
            }

            // Add children for further traversal
            if (temp.left != null) {
                queue.push(temp.left);
            }
            if (temp.right != null) {
                queue.push(temp.right);
            }
        }

        // If keyNode is found, replace its value with deepest node's value
        if (keyNode != null) {
            let lastValue = temp.val;  // Deepest node's value
            this.deleteDeepest(temp);  // Remove deepest node
            keyNode.val = lastValue;   // Replace keyNode’s value
            return true;
        }

        // Node not found
        return false;
    }

    // Helper: Delete the deepest (bottom-most, right-most) node
    deleteDeepest(temp) {
        let queue = [];
        queue.push(this.root);

        // If the node to delete is the root itself
        if (this.root == temp) {
            this.root = null;
            return;
        }

        while (queue.length > 0) {
            let currentNode = queue.shift();

            // If left child is the target node, delete it
            if (currentNode.left == temp) {
                currentNode.left = null;
                return;
            } 
            else if (currentNode.left != null) {
                queue.push(currentNode.left);
            }

            // If right child is the target node, delete it
            if (currentNode.right == temp) {
                currentNode.right = null;
                return;
            } 
            else if (currentNode.right != null) {
                queue.push(currentNode.right);
            }
        }
    }
}

// Example usage:
let tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
// Inserted nodes in level order: root->1, left->2, right->3, next->4

tree.update(1, 6);   // Update node with value 1 to 6
tree.delete(2);      // Delete node with value 2
tree.inorder(tree.root);  // Print tree nodes in sorted order
