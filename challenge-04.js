// Clase que representa una persona en la fila del cajero automático (ATM)
class ATM {
    constructor(name, arriveTime) {
        this.name = name;
        this.arriveTime = arriveTime;
        this.people = []; // Arreglo para almacenar las personas en la fila
    }

    // Método para añadir una persona a la fila
    enqueue(name, arriveTime) {
        const newPerson = new ATM(name, arriveTime);
        this.people.push(newPerson);
        return `The person "${name}" has been added`;
    }

    // Método para ver la primera persona en la fila sin eliminarla
    peek() {
        const person = this.people[0];
        return person ? `Name: ${person.name}, Arrive Time: ${person.arriveTime}` : "Person not found";
    }

    // Método para eliminar la primera persona en la fila
    dequeue() {
        const person = this.people.shift();
        return `${person.name} has been removed`;
    }

    // Método para obtener el número de personas en la fila
    size() {
        return this.people.length;
    }

    // Método para verificar si la fila está vacía
    isEmpty() {
        return this.people.length === 0;
    }

    // Método para imprimir la información de todas las personas en la fila
    print() {
        this.people.forEach(person => {
            console.log(`Name: ${person.name}, Arrive Time: ${person.arriveTime}`);
        });
    }
}

// Crear una nueva instancia de ATM para representar la fila en el banco
const bank = new ATM();

console.log("Enqueue:");
// Añadir personas a la fila
console.log(bank.enqueue("Juan Eduardo", 8));
console.log(bank.enqueue("Ludy", 12));
console.log(bank.enqueue("Alejandro", 13));
console.log(bank.enqueue("Luis", 20));

console.log("Peek:");
// Ver la primera persona en la fila sin eliminarla
console.log(bank.peek());

console.log("Dequeue:");
// Eliminar la primera persona en la fila
console.log(bank.dequeue());

console.log("Size:");
// Obtener el número de personas en la fila
console.log(bank.size());

console.log("Is Empty:");
// Verificar si la fila está vacía
console.log(bank.isEmpty());

console.log("Print People:");
// Imprimir la información de todas las personas en la fila
bank.print();