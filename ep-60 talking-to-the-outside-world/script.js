const image = document.querySelector('img')
const button = document.querySelector('button')
button.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((Response)=>Response.json())
    .then((json)=>{
        image.src= json.message
    })
})