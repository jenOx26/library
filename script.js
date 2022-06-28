let addBtn = document.getElementById('addBtn');
let cards = document.querySelector('.cards');

let modal = document.getElementById("myModal");
let openModal = document.getElementById("openModal");
let closeModal = document.getElementsByClassName("closeModal")[0];

openModal.onclick = function() {
  modal.style.display = "grid";
}

closeModal.onclick = function() {
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
    const read = document.getElementById('read').checked;
    const newBook = new Book(title, author, pages, read);
    newBook.info();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let book = `${title}\nby ${author}\n${pages} pages`
        addBookToLibrary(book, read);
    }
}

function addBookToLibrary(book, read) {
    myLibrary.push({info: book, read: read});
    displayBooks();
}

function displayBooks() {
    removeCards()
    let books = myLibrary;
    for (let book of books) {
        let card = document.createElement('div');
        cards.appendChild(card).innerText = book.info;
        card.classList.add('card');
        card.setAttribute('id', myLibrary.indexOf(book));

        let readBtn = document.createElement('button');
        card.appendChild(readBtn).innerText = book.read ? 'Read!' : 'Not read yet!';
        readBtn.classList.add('readBtn');
        readBtn.onclick = function() {
            if (readBtn.innerText === "Read!") {
                readBtn.innerText = "Not read yet!";
              } else {
                readBtn.innerHTML = "Read!";
              }
        }
        
        let removeBtn = document.createElement('button');
        card.appendChild(removeBtn).innerText = 'Remove';
        removeBtn.classList.add('removeBtn')

        removeBtn.onclick = function() {
            myLibrary.splice(myLibrary.indexOf(book),1);
            displayBooks();
        }
    }
}

function removeCards() {
    while (cards.lastChild) {
        cards.removeChild(cards.lastChild);
    }
}