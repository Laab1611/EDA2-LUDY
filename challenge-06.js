class PersonNode {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class CityNode {
    constructor(name) {
        this.name = name;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node.name] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1.name].push(node2);
        this.adjacencyList[node2.name].push(node1);
    }

    searchNode(node) {
        if (!this.nodes.length) {
            return "Graph is empty";
        }
        return this.nodes.find((n) => n.name === node) || "Node not found";
    }

    printAdjacency(node) {
        const foundNode = this.searchNode(node);
        if (foundNode === "Node not found" || foundNode === "Graph is empty") {
            return foundNode;
        }
        console.log(`Adjacency list of ${node}:`, this.adjacencyList[node]);
    }

    personInCity(city) {
        let persons = this.nodes.filter((n) => n.city.name === city);
        if (!persons.length) {
            return "No persons in this city: " + city;
        }
        return persons;
    }
}

// Crear grafo
let graph = new Graph();

// Crear nodos de ciudad
let city1 = new CityNode("Cali");
let city2 = new CityNode("Popayán");
let city3 = new CityNode("Bogotá");

// Crear nodos de persona
let person1 = new PersonNode("Andres", 25, city1);
let person2 = new PersonNode("Carlos", 22, city1);
let person3 = new PersonNode("Luisa", 30, city2);

// Agregar nodos de persona al grafo
graph.addNode(person1);
graph.addNode(person2);
graph.addNode(person3);

// Agregar aristas al grafo
graph.addEdge(person1, person2);
graph.addEdge(person2, person3);

// Imprimir nodos
console.log("Nodos:")
console.log(graph.adjacencyList);
// Buscar nodos
console.log("")
console.log("Buscar nodos:")
console.log(graph.searchNode("Andres"));
console.log(graph.searchNode("Carlos"));
console.log(graph.searchNode("Luisa")); // Nodo no encontrado

// Imprimir lista de adyacencia
console.log("")
console.log("Imprimir lista de adyacencia:")
graph.printAdjacency("Andres"); 
graph.printAdjacency("Luisa"); // Nodo no encontrado

// Buscar personas en la ciudad
console.log("")
console.log("Personas en la ciudad:")
console.log(graph.personInCity("Cali"));
console.log(graph.personInCity("Popayán")); 
console.log(graph.personInCity("Bogotá")); // No hay personas en esta ciudad