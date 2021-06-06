const btnNewBook = document.querySelector(".btn-new-book");
const form = document.querySelector("#form");
const btnAddBook = document.querySelector("#btn-add-book");
const myLibrary = [];

btnNewBook.addEventListener("click", () => {
  btnNewBook.classList.add("button");
  form.classList.add("form");
});

class Book {
    constructor(details) {
        this.id = Math.floor( Math.random() * 100000 )
        this.title = details.title;
        this.author = details.author;
        this.pages = details.pages;
        this.status = details.status;
    }
};

function addBookToLibrary() {
    details = Array.from(document.querySelectorAll(".input")).reduce(
      (acc, input) => ({ ...acc, [input.id]: input.value }),
      {}
    );
    const newBook = new Book(details);
    myLibrary.push(newBook);
    form.reset();
}

function render() {
  const card = document.createElement("article");
  const archive = document.querySelector(".archive");
  myLibrary.forEach((book) => {
    card.id = book.id
    let button
    book.status === "Not Read" 
    ? button = `<button class="btn-status not-read">Not Read</button>`
    : button = `<button class="btn-status read">Read</button>`
    card.innerHTML = `
    <h1>${book.title.toUpperCase()}</h1>
    <p>by ${book.author.toUpperCase()}</p>
    <p>${book.pages} pages</p>
    ${button}
    <button class="btn-remove">Remove</button>
    `;
    archive.appendChild(card);
  
  });
  
  const removeBtn = document.querySelectorAll(".btn-remove");

  const statusBtn = document.querySelectorAll(".btn-status");
  
  statusBtn.forEach( btn => {
    btn.addEventListener( "click", changeStatus);
  });

  removeBtn.forEach( (btn, index) => {
    btn.addEventListener("click", removeBook);
  });
}

const changeStatus = (e) => {
  if ( e.target.textContent.includes( "Not Read" ) ) {
    e.target.classList.replace("not-read", "read");
    e.target.textContent = "Read";
  } else {
    e.target.classList.replace("read", "not-read");
    e.target.textContent = "Not Read";
  }
}

const removeBook = (e) => {
  e.target.parentElement.remove();

  for ( let i = 0; i < myLibrary.length; i++ ) {
    if ( myLibrary[i].id == e.target.parentElement.id ) {
      removeFromLibrary(i)
    }
    
  }
}

function removeFromLibrary(index) {
  myLibrary.splice(index, 1);
}

btnAddBook.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please fill in all the information!");
  } else {
    addBookToLibrary();
    render();
  }
});