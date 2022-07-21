let myLibrary = [title1, title2, title3];

function Book(title, author, pages, beenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = beenRead; // input "not read yet" or "has been read"
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${beenRead}.`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(theHobbit.info());
console.log(theHobbit.readStatus);

function addBookToLibrary() {
  //do stuff here
}
