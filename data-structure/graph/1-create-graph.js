class Graph {
  constructor() {
    this.numberOfNode = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      console.log("Node already exits!");
      return;
    }
    this.adjacentList[node] = [];
    this.numberOfNode++;
  }

  addEdge(node1, node2) {
    if (this.adjacentList[node1]) {
      this.adjacentList[node1].push(node2);
    }
    if (this.adjacentList[node2]) {
      this.adjacentList[node2].push(node1);
    }
  }

  //showConnections() {}
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdge("0", "1");
console.log(myGraph);
