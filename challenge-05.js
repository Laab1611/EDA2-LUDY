// Clase que representa un árbol genealógico
class FamilyTree {
    constructor() {
        this.root = null; // Inicialmente, el árbol está vacío
    }

    // Método para insertar un nuevo miembro en el árbol
    insert(name, birthDate, parentName = null) {
        const newNode = { name, birthDate, children: [] }; // Crear un nuevo nodo
        if (this.root === null) {
            this.root = newNode; // Si el árbol está vacío, el nuevo nodo es la raíz
        } else {
            const parent = this.findNode(this.root, parentName); // Buscar el nodo padre
            if (parent) {
                parent.children.push(newNode); // Añadir el nuevo nodo como hijo del nodo padre
            }
        }
    }

    // Método para encontrar un nodo por nombre
    findNode(node, name) {
        if (node.name === name) {
            return node; // Si el nodo actual es el buscado, devolverlo
        }
        for (let child of node.children) {
            const result = this.findNode(child, name); // Buscar recursivamente en los hijos
            if (result) {
                return result; // Si se encuentra el nodo, devolverlo
            }
        }
        return null; // Si no se encuentra el nodo, devolver null
    }

    // Método para recorrer el árbol en orden (in-order)
    inOrder(node = this.root) {
        if (node === null) {
            return; // Si el nodo es null, terminar la recursión
        }
        if (node.children.length > 0) {
            this.inOrder(node.children[0]); // Recorrer el subárbol izquierdo
        }
        console.log(node.name); // Visitar el nodo raíz
        for (let i = 1; i < node.children.length; i++) {
            this.inOrder(node.children[i]); // Recorrer el subárbol derecho
        }
    }

    // Método para recorrer el árbol en preorden (pre-order)
    preOrder(node = this.root) {
        if (node === null) {
            return; // Si el nodo es null, terminar la recursión
        }
        console.log(node.name); // Visitar el nodo raíz
        for (let child of node.children) {
            this.preOrder(child); // Recorrer recursivamente los hijos
        }
    }

    // Método para recorrer el árbol en postorden (post-order)
    postOrder(node = this.root) {
        if (node === null) {
            return; // Si el nodo es null, terminar la recursión
        }
        for (let child of node.children) {
            this.postOrder(child); // Recorrer recursivamente los hijos
        }
        console.log(node.name); // Visitar el nodo raíz
    }
}

// Pruebas
const familyTree = new FamilyTree();
console.log(familyTree, "(Antes de Insertar)"); // Mostrar el árbol antes de insertar nodos

// Insertar miembros en el árbol
familyTree.insert("Juan", "01/01/1980");
familyTree.insert("María", "01/01/1982", "Juan");
familyTree.insert("Carlos", "01/01/2000", "María");
familyTree.insert("Laura", "01/01/2002", "María");
console.log(familyTree, "(Después de Insertar)"); // Mostrar el árbol después de insertar nodos

// Recorrer el árbol en preorden
console.log("- - - PreOrder - - -");
familyTree.preOrder();

// Recorrer el árbol en postorden
console.log("- - - PostOrder - - -");
familyTree.postOrder();

// Recorrer el árbol en orden
console.log("- - - InOrder - - -");
familyTree.inOrder();