const userNameInput = document.querySelector('#username');
const paragraph = document.querySelector('p');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userNameInput.value);
    paragraph.textContent = `Submitted: ${userNameInput.value}`;
});
