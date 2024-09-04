// Clase que representa un libro y una colección de libros
class Books {
    constructor(name, ISBN, author, editorial) {
        this.name = name;
        this.ISBN = ISBN;
        this.author = author;
        this.editorial = editorial;
        this.books = []; // Arreglo para almacenar los libros
    }

    // Método para añadir un nuevo libro a la colección
    push(name, ISBN, author, editorial) {
        const newBook = new Books(name, ISBN, author, editorial);
        this.books.push(newBook);
        return `Book "${name}" has been added`;
    }

    // Método para buscar un libro por su ISBN y devolver su información
    peek(ISBN) {
        const book = this.books.find(book => book.ISBN === ISBN);
        return book ? `Name: ${book.name}, ISBN: ${book.ISBN}, Author: ${book.author}, Editorial: ${book.editorial}` : "Book not found";
    }

    // Método para eliminar el último libro añadido a la colección
    pop() {
        return this.books.pop();
    }

    // Método para obtener el número de libros en la colección
    size() {
        return this.books.length;
    }

    // Método para imprimir la información de todos los libros en la colección
    print() {
        this.books.forEach(book => {
            console.log(`Name: ${book.name}, ISBN: ${book.ISBN}, Author: ${book.author}, Editorial: ${book.editorial}`);
        });
    }
}

// Crear una nueva colección de libros
const library = new Books();

// Añadir libros a la colección
console.log("Push:");
console.log(library.push("Tell me What You Want", "978-0-395-07122-1", "Megan Maxwell", "Avon"));
console.log(library.push("The Notebook", "970-0-446-52087-4", "Nicholas Sparks", "Warner Books"));
console.log(library.push("The Alchemist", "965-0-06-231500-7", "Paulo Coelho", "HarperOne"));
console.log(library.push("The Da Vinci Code", "875-0-385-50420-5", "Dan Brown", "Doubleday"));

// Buscar un libro por su ISBN
console.log("Peek:");
console.log(library.peek("978-0-395-07122-1"));

// Eliminar el último libro añadido
console.log("Pop:");
console.log(library.pop());

// Obtener el número de libros en la colección
console.log("Size:");
console.log(library.size());

// Imprimir la información de todos los libros en la colección
console.log("Print Books:");
library.print();