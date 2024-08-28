class PersonNode {
  constructor(fullName, birthdate) {
    this.fullName = fullName;
    this.birthdate = birthdate;
    this.children = [];
  }
}

class FamilyTree {
  constructor(root) {
    this.root = root;
  }

  // Método para encontrar un nodo por el nombre completo (usado para encontrar padres)
  searchNode(fullName, node = this.root) {
    if (!this.root) {
      return null;
    }

    if (node.fullName === fullName) {
      return node;
    } else {
      const children = node.children;

      const inChildren = children.find((child) => child.fullName === fullName);
      if (inChildren) {
        return inChildren;
      } else {
        for (let child of children) {
          const found = this.searchNode(fullName, child);
          if (found) {
            return found;
          }
        }
      }
    }
    return null;
  }

  // Método para agregar un hijo a un padre específico
  insertChild(fullName, birthdate, parent) {
    const newNode = new PersonNode(fullName, birthdate);

    if (!parent) {
      if (!this.root) {
        this.root = newNode;
      } else {
        return null;
      }
    } else {
      const parentNode = this.searchNode(parent);
      if (parentNode) {
        parentNode.children.push(newNode);
      } else {
        return "Parent not found";
      }
    }
  }

  // Recorrido en preOrder: primero el padre, luego los hijos (de arriba hacia abajo)
  preOrder(node = this.root) {
    if (!node) {
      return;
    }
    console.log(
      `Full Name: ${node.fullName}, Birthday Date: (${node.birthdate})`
    );
    node.children.forEach((child) => this.preOrder(child));
  }

  // Post-order traversal: children, then parent (bottom-up)
  postOrder(node = this.root) {
    if (!node) {
      return;
    }
    node.children.forEach((child) => this.postOrder(child));
    console.log(
      `Full Name: ${node.fullName}, Birthday Date: (${node.birthdate})`
    );
  }

  // In-order traversal: first child, then parent, then remaining children (customized for N-ary trees)
  inOrder(node = this.root) {
    if (!node) {
      return;
    }
    if (node.children.length === 0) {
      console.log(`"Full Name:" ${node.fullName}, "Birthday Date:" (${node.birthdate})`);
    } else {
      this.inOrder(node.children[0]);
      console.log(`"Full Name:" ${node.fullName}, "Birthday Date:" (${node.birthdate})`);

      for (let i = 1; i < node.children.length; i++) {
        this.inOrder(node.children[i]);
      }
    }
  }
}

// Example:

// Create root node (first generation)
const root = new PersonNode("John Doe", "1950-01-01");

// Create the family tree object
const familyTree = new FamilyTree(root);

// Add children to specific parents
familyTree.insertChild("Jane Doe", "1970-01-01", "John Doe");
familyTree.insertChild("Jim Doe", "1975-01-01", "John Doe");
familyTree.insertChild("Jack Doe", "1980-01-01", "John Doe");

// Print the tree in different orders
console.log("Pre-Order:");
familyTree.preOrder();

console.log("\nPost-Order:");
familyTree.postOrder();

console.log("\nIn-Order:");
familyTree.inOrder();