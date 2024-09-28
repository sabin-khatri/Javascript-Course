const h1 = document.querySelector('h1');
const paragraph = document.querySelector('paragraph');
const allLinks = document.querySelectorAll('a');
h1.style.color = 'hotpink';
h1.style.backgroundColor= 'skyblue';
for (const link of allLinks){
    link.classList.add('green-link');
    link.classList.add('my-link');
}
const firstLink = document.querySelector("body > p:nth-child(5) > a.hii.hello.green-link")