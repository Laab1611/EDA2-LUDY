 /*
2. Modificar el algoritmo de árboles binarios, implementar una función para calcular la altura de un árbol.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
}

// Función para calcular la altura del árbol
function calculateHeight(root) {
    if (root === null) {
        return 0;
    }
    const leftHeight = calculateHeight(root.left);
    const rightHeight = calculateHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

// Test
const root = new Node(16);
root.left = new Node(6);
root.right = new Node(23);
root.left.left = new Node(2);
root.left.right = new Node(14);
root.right.left = new Node(17);
root.right.right = new Node(31);
root.left.left.right = new Node(5);

// Crea una instancia de BinaryTree con root como su raíz
const tree = new BinaryTree(root);

// Calcula la altura del árbol 
const height = calculateHeight(tree.root);
console.log(`La altura del árbol es: ${height}`); // La altura según el ejemplo es 4