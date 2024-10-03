const addCardBtn = document.querySelector('.add-card-btn');
const container = document.querySelector('#container');
const input = document.querySelector('input');
const form = document.querySelector('form');

let cardCount = 1;

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.innerText = cardCount++;
  container.append(newCard);
});
