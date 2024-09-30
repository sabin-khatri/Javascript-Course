const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayHi() {
    console.log('Hiiiii');
}

function secondSayHi() {
    console.log('Second Hi');
}



let count = 1

card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
   
    console.log(newCard)
    newCard.innerText = count++
    container.append(newCard)
})