// your JavaScript file
const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');

const buttons = document.querySelectorAll("button");

// buttons is a node list. It looks and acts much like an array.
// use forEach to iterate over the buttons
buttons.forEach((button) => {
    // add a 'click' listener for each button
    button.addEventListener('click', () => {
        alert(`You clicked on button number ${button.id}!`);
    });
});


// Adding class to first div and adding div to container as a child
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// adding styles to first paragraph and appending it to the container
para.style.color = "red";
para.textContent = "Hey I'm red!"
container.appendChild(para);

//adding styles to the h3 and appending it to the container
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

//adding a second div with styles and appending it to the container after appending an h1 and a paragraph to the div first
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
h1.textContent = "I'm in a div";
div.appendChild(h1);
para2.textContent = "ME TOO!";
div.appendChild(para2);
container.appendChild(div);