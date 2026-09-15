const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id =id;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }

}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read, crypto.randomUUID()))

}

