// Clase que representa una tarea
class Tasks {
    constructor(title, description, next = null) {
        this.title = title;
        this.description = description;
        this.next = next;
    }
}

// Clase que representa una lista enlazada de tareas
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Método para añadir una tarea al final de la lista
    append(title, description) {
        const newTask = new Tasks(title, description);
        if (!this.head) {
            this.head = newTask;
        } else {
            this.tail.next = newTask;
        }
        this.tail = newTask;
    }

    // Método para buscar una tarea por título y devolver su información
    peek(title, current = this.head) {
        if (!current) {
            return null;
        }
        if (current.title === title) {
            return `Título: ${current.title}, Siguiente: ${current.next?.title || "null"}`;
        }
        return this.peek(title, current.next);
    }

    // Método para calcular el tamaño de la lista
    size(current = this.head, count = 0) {
        if (!current) {
            return count;
        }
        return this.size(current.next, count + 1);
    }

    // Método para eliminar una tarea por título
    remove(title, current = this.head) {
        if (!current) {
            return null;
        }
        if (current.title === title) {
            this.head = current.next;
            return `Título: ${current.title}, Siguiente: ${current.next?.title || "null"}`;
        }
        if (current.next && current.next.title === title) {
            const removed = current.next;
            current.next = current.next.next;
            return `Título: ${removed.title}, Siguiente: ${removed.next?.title || "null"}`;
        }
        return this.remove(title, current.next);
    }

    // Método para imprimir todas las tareas en la lista
    print() {
        let task = this.head;
        while (task) {
            console.log(`Título: ${task.title}, Siguiente: ${task.next?.title || "null"}`);
            task = task.next;
        }
    }
}

// Crear una nueva lista enlazada y añadir algunas tareas
const list = new LinkedList();
list.append("Task 1", "Descripción blskfke");
list.append("Task 2", "Descripción nxkldasmej");
list.append("Task 3", "Descripción ekwmcfkledn");
list.append("Task 4", "Descripción vmkewrnmvkdr");

// Imprimir la lista completa en formato tabla
console.table(list);

// Buscar y mostrar información de una tarea específica
console.log("Peek: " + list.peek("Task 4"));

// Mostrar el tamaño de la lista
console.log("Size: " + list.size());

// Eliminar una tarea específica y mostrar su información
console.log("Remove: " + list.remove("Task 2"));

// Imprimir la lista después de eliminar una tarea
console.log("Lista después de eliminar la tarea:");
list.print();