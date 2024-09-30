const h1 = document.querySelector('h1')
const container = document.querySelector('.container')

const paragraph = document.createElement('p')
for (let i = 1; i <= 100; i++) {
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(newImg)
  }