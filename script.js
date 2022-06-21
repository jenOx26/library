let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        book = {title, author, pages, read};
        addBookToLibrary(book);
        return {title, author, pages, read};
    }
}

function addBookToLibrary() {
    myLibrary.push(book);
}

function displayBooks() {
    let books = myLibrary;
    for (const book of books) {
        console.log(book);
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');
theHobbit.info();
const blah = new Book ('blah', 'blah', '22', 'read');
blah.info();
console.log(myLibrary);
displayBooks();