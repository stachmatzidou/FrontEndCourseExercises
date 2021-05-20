function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype = {
    info : function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "already read.");
console.log(theHobbit.info());

const theShinning = new Book("The Shinning", "Stephen King", 538, "already read.");
console.log(theShinning.info());

const theNameOfTheRose = new Book("The Name of the Rose", "Umberto Eco", 738, "already read.");
console.log(theNameOfTheRose.info());