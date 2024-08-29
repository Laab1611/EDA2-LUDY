/*
 1. Implementar una función que tenga como parámetros dos listas enlazadas de números ordenados de 
 mayor a menor y que retorne una nueva lista con la unión de ambas y sus elementos ordenados de menor a mayor.
*/

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    // Convertir la lista en un array
    toArray() {
        const result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    // Crear una lista desde un array de valores
    fromArray(values) {
        for (const value of values) {
            this.append(value);
        }
    }
}

// Función para fusionar las listas
function mergeAndSortLists(list1, list2) {
    const mergedValues = new Set([...list1.toArray(), ...list2.toArray()]); // Set para eliminar duplicados
    const sortedValues = Array.from(mergedValues).sort((a, b) => a - b); // Convierte a array y ordena
    const mergedList = new LinkedList();
    mergedList.fromArray(sortedValues); // Crea la lista desde el array ordenado
    return mergedList;
}

// Test
const list1 = new LinkedList();
list1.fromArray([15, 9, 8, 7, 4, 1]);

const list2 = new LinkedList();
list2.fromArray([32, 23, 14, 13, 5, 4, 1]);

const sortedList = mergeAndSortLists(list1, list2);
console.log("La nueva lista combinada y ordenada es:", sortedList.toArray()); // La nueva lista debería de ser [1, 4, 5, 7, 8, 9, 13, 14, 15, 23, 32]