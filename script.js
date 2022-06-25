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
    const newBook = new Book(title, author, pages, read);
    newBook.info();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let book = `Title: ${title}\nAuthor: ${author}\nPages: ${pages}`
        addBookToLibrary(book);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    removeCards()
    
    let read;
    if (document.getElementById('read').checked == true) {
        read = 'Read!';
    } else {
        read = 'Not read yet!';
    }

    let books = myLibrary;
    for (let book of books) {
        let card = document.createElement('div');
        cards.appendChild(card).innerText = book;
        card.classList.add('card');
        card.setAttribute('id', myLibrary.indexOf(book));

        let readBtn = document.createElement('button');
        card.appendChild(readBtn).innerText = read;
        readBtn.classList.add('readBtn');
        readBtn.setAttribute('id', 'readBtn')
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
        removeBtn.setAttribute('id', 'removeBtn');

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