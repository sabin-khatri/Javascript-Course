const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('#nameInput');
const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('#ageInput');
let myData = JSON.parse(localStorage.getItem('myData')) || {};

if (myData.name) {
    nameElement.innerText = myData.name;
    nameInput.value = myData.name;
}
if (myData.age) {
    ageElement.innerText = myData.age;
    ageInput.value = myData.age;
}


nameInput.addEventListener('input', (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    nameElement.innerText = e.target.value;
});

ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    ageElement.innerText = e.target.value;
});
