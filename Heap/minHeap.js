class minHeap{
    constructor() {
        this.heap =[]
    }
    parent(i) {
        return Math.floor((i-1)/2)
    }
    //TC:O(logn)
    insert(val) {
        this.heap.push(val)
        let i = this.heap.length - 1
        //bubble up
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            let temp = this.heap[i]
            this.heap[i] = this.heap[this.parent(i)]
            this.heap[this.parent(i)] = temp
            i=this.parent(i)
        }
    }
}
let MinHeap = new minHeap()
MinHeap.insert(5)
MinHeap.insert(3)
MinHeap.insert(8)
MinHeap.insert(2)
console.log(MinHeap.heap)
