// OBJECT LITERALS

//const playerOne = {
//   name: 'tim',
//   marker: 'X',
// };

// const playerTwo = {
//   name: 'jenn',
//   marker: 'O',
// };

// function printShit(player) {
//   console.log(player.name);
//   console.log(player.marker);
//   console.log(player["name"]);
//   console.log(player["marker"]);
// }

// printShit(playerTwo);
// printShit(playerOne);

// CONSTRUCTORS

// Example 1
// function Player(name, marker) {
//   this.name = name
//   this.marker = marker
//   this.sayName = function () {
//     console.log(name)
//   }
// }

// const player1 = new Player("Steve", 'X')
// const player2 = new Player("also Steve", 'O')

// player1.sayName();
// player2.sayName();

// Example 2
// function Book(title, author, pages, beenRead) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readStatus = beenRead; // input "not read yet" or "has been read"
//   this.info = function () {
//     return `${title} by ${author}, ${pages} pages, ${beenRead}.`
//   }
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

// console.log(theHobbit.info());
// console.log(theHobbit.readStatus);

