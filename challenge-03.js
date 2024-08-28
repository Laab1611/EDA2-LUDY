class Books {
  constructor(name, ISBN, author, editorial) {
    this.name = name;
    this.ISBN = ISBN;
    this.author = author;
    this.editorial = editorial;
    this.books = [];
  }
}

class StackBooks {
  constructor() {
    this.books = [];
  }

  push(book) {
    this.books.push(book);
    return this.books;
  }

  pop() {
    return this.books.pop();
  }

  peek() {
    return this.books[this.books.length - 1];
  }

  size() {
    return this.books.length;
  }

  printStack() {
    this.books.forEach((book, index) => {
      console.log(`Book ${index + 1}: ${book.name}, ISBN: ${book.ISBN}, Author: ${book.author}, Editorial: ${book.editorial}`);
    });
  }
}

const books = new StackBooks();
console.log("Push")
console.log(StackBooks.push(new Books('El principito', '978-3-16-148410-0', 'Antoine de Saint-Exupéry', 'Reynal & Hitchcock')));
console.log(StackBooks.push(new Books('El alquimista', '978-3-16-148410-1', 'Paulo Coelho', 'HarperCollins')));

console.log(StackBooks.pop());
stack.printStack();
console.log(stack.peek());