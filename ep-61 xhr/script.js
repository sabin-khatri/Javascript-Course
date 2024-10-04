const image = document.querySelector('img'); 
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) { 
      image.src = xhr.response.message;
      console.log(xhr); 
    } else {
      console.error('Error:', xhr.status);
    }
  });

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.send();
});