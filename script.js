//let title = document.getElementById('title').value;
//let author = document.getElementById('author').value;
//let pages = document.getElementById('pages').value;
//let read = document.getElementById('read').checked;
let addBtn = document.getElementById('addBtn');
let cards = document.querySelector('.cards');
//.addEventListener('click', getBookFromInput);

let modal = document.getElementById("myModal");
let openModal = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];

openModal.onclick = function() {
  modal.style.display = "grid";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let myLibrary = [];

function getBookFromInput() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read;
    if (document.getElementById('read').checked == true) {
        read = 'Yep!';
    } else {
        read = 'Not yet!';
    }
    const newBook = new Book(title, author, pages, read);
    newBook.info();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let book = `Title: ${title}\nAuthor: ${author}\nPages: ${pages}\nRead? ${read}`;
        addBookToLibrary(book);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    removeCards()
    let books = myLibrary;
    for (let book of books) {
        let card = document.createElement('div');
        cards.appendChild(card).innerText = book;
        console.log(book);
    }
}

function removeCards() {
    while (cards.lastChild) {
        cards.removeChild(cards.lastChild);
    }
}