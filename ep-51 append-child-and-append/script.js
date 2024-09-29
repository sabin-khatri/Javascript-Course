const myDiv = document.getElementById('myDiv');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'this is a new paragraph';
myDiv.appendChild(newParagraph);
const newHeading = document.createElement('h2');
newHeading.textContent='new HEading 2';
myDiv.append(newHeading, document.createTextNode('this is some text'))
