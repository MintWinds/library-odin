const myLibrary = [];
const myLibraryDisplayed = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id =id;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }

}

Book.prototype.hasRead = function(read) {
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read, crypto.randomUUID()))

}


function displayLibrary() {
    while (myLibrary.length > 0) {
        const book = myLibrary.pop()
        const bookFrame = document.createElement("div");
        bookFrame.classList.add("book");
        let readProperty;
        for (const property in book) {
            let isOwn = book.hasOwnProperty(property);
            if (isOwn && (typeof book[property] !== "function")) {
                console.log(property);
                const item = document.createElement("div");
                item.textContent = book[property]
                bookFrame.appendChild(item)
                if (property === "read") {
                    readProperty = item;
                }
            }
        }
        const deleteButtonContainer = document.createElement("div");
        deleteButtonContainer.setAttribute("class", "db-container");
        const deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Delete");
        const bookcontainer = document.querySelector(".container");
        bookFrame.appendChild(deleteButtonContainer);
        deleteButtonContainer.appendChild(deleteButton);
        bookcontainer.appendChild(bookFrame);
        deleteButton.addEventListener("click", () => bookcontainer.removeChild(bookFrame))

        const toggleReadContainer = document.createElement("div");
        toggleReadContainer.setAttribute("class", "db-container");
        const toggleRead = document.createElement("input");
        toggleRead.setAttribute("type", "button");
        toggleRead.setAttribute("value", "Toggle Read");
        bookFrame.appendChild(toggleReadContainer);
        toggleReadContainer.appendChild(toggleRead);
        toggleRead.addEventListener("click", () => {
            book.hasRead(!(book.read));
            readProperty.textContent = book.read;
  

        });
        
        
        myLibraryDisplayed.push(book);
    }
    
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    addBookToLibrary(title.value, author.value, pages.value, read.value === "yes")
    displayLibrary();
})



