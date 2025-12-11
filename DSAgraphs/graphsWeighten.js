let graph = {}
function addVertex(Vertex) {
            graph[Vertex]=[]
    
}
function addEdge(v1, v2,weight) {
    graph[v1].push({node:v2,weight:weight})
}
function display(){
    for (let vertex in graph) {
        console.log(vertex + "->")
        for (let ele of graph[vertex]) {
            console.log(`Node : ${ele.node} weight : ${ele.weight}`)
        }
    }
}

addVertex('A')
addVertex('B')
addVertex('C')
addVertex('d')
addEdge('A', 'B',1)
addEdge('B', 'C',5)
addEdge('C','D',4)
console.log(graph)
display()