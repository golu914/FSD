let graph = {}
function addVertex(Vertex) {
    if (!graph[Vertex]) {
        graph[Vertex]=[]
    }
}
function addEdge(v1, v2) {
    graph[v1].push(v2)
}
addVertex('A')
addVertex('B')
addVertex('C')
addVertex('E')
addEdge('A', 'B')
addEdge('A', 'C')
addEdge('B', 'D')
addEdge('C','E')
console.log(graph)